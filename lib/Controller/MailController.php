<?php
namespace OCA\FileSubscription\Controller;

use OCP\IRequest;
use OCP\Defaults;
use OCP\IConfig;
use OCP\IURLGenerator;
use OCP\IUser;
use OCP\Mail\IEMailTemplate;
use OCP\Mail\IMailer;
use OCP\IL10N;
use OCP\AppFramework\Controller;
use OC\AppFramework\Http;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Http\JSONResponse;
use OCA\FileSubscription\Manager;
use OCA\FileSubscription\Model\SubscriptionDoesNotExistException;
use OCP\Share\IManager as ShareManager;

class MailController extends Controller {

	/** @var IConfig */
	private $config;
	/** @var IURLGenerator */
	private $urlGenerator;
	/** @var IMailer */
	private $mailer;
	/** @var IL10N */
	private $l10n;
	/** @var Manager */
	private $manager;
	/** @var ShareManager */
	protected $shareManager;

	public function __construct($AppName,
								IConfig $config,
								IRequest $request,
								IURLGenerator $urlGenerator,
								IMailer $mailer,
								IL10N $l10n,
								Manager $manager,
								ShareManager $shareManager) {
		parent::__construct($AppName, $request);
		$this->appName = $AppName;
		$this->config = $config;
		$this->urlGenerator = $urlGenerator;
		$this->mailer = $mailer;
		$this->l10n = $l10n;
		$this->manager = $manager;
		$this->shareManager = $shareManager;
	}


	/** 寄出信件
	 * @NoAdminRequired
	 * @param string $email Email address
	 * @param string $displayName Email address
	 * @param IEMailTemplate $template
	 * @return array
	 */
	private function sendMail(string $email, string $displayName, $template) {
		try {
			$message = $this->mailer->createMessage();
			$message->setTo([$email => $displayName]);
			$message->useTemplate($template);
			$errors = $this->mailer->send($message);
			if (!empty($errors)) {
				throw new \RuntimeException($this->l10n->t('Email could not be sent. Check your mail server log.'));
			}
			$result['result'] = true;
			$result['message'] = $this->l10n->t('Email sent.');
		} catch (\Exception $e) {
			$result['result'] = false;
			$result['message'] = $e->getMessage();
		}
		return $result;
	}

	/**
	 * 寄訂閱信件給所有訂閱者
	 * @param int $shareId
	 * @throws \Exception If mail could not be sent
	 * @NoAdminRequired
	 */
	public function updateMail($shareId) {

		try {
			$subscription = $this->manager->getSubscription($shareId);
		} catch (SubscriptionDoesNotExistException $e) {
			return new DataResponse([
				'data' => [
					'message' => $this->l10n->t('沒有訂閱者'),
				],
				'result' => false
			], Http::STATUS_BAD_REQUEST);
		}

		$template = $this->mailTemplate_update($shareId, $subscription);

		// Send mail
        $emailArr = \json_decode($subscription->getEmails());
        foreach ($emailArr as $email) {
			$displayName = $email; // TODO 沒有訂閱者名稱
			$sendInfos[$displayName] = $this->sendMail($email, $displayName, $template);
        }

		$sentCount = 0; // 傳送成功的數量
		foreach($sendInfos as $displayName => $infos) {
			if($infos['result']) $sentCount ++;
		}

		$setVal['updateEmailTime'] = true;
		$subscription = $this->manager->setSubscription($shareId, $setVal);

		return new DataResponse([
			'data' => [
				'message' => $this->l10n->t('%s email sent.', [$sentCount]),
				'infos' => $sendInfos,
				'lastEmailTime' => date('Y-m-d H:i', $subscription->getLastEmailTime()),
			],
			'result' => true
		], Http::STATUS_OK);
	}

	/**
	 * 寄取消訂閱通知信給所有訂閱者
	 * @param int $shareId
	 * @throws \Exception If mail could not be sent
	 * @NoAdminRequired
	 */
	public function cancelMail(int $shareId) {

		try {
			$subscription = $this->manager->getSubscription($shareId);
		} catch (SubscriptionDoesNotExistException $e) {
			return new DataResponse([
				'data' => [
					'message' => $this->l10n->t('沒有訂閱者'),
				],
				'result' => false
			], Http::STATUS_BAD_REQUEST);
		}

		$template = $this->mailTemplate_cancel($shareId, $subscription);

		// Send mail
        $emailArr = \json_decode($subscription->getEmails());
        foreach ($emailArr as $email) {
			$displayName = $email;
			$sendInfos[$displayName] = $this->sendMail($email, $displayName, $template);
        }

		$sentCount = 0; // 傳送成功的數量
		foreach($sendInfos as $displayName => $infos) {
			if($infos['result']) $sentCount ++;
		}

		return new DataResponse([
			'data' => [
				'message' => $this->l10n->t('%s email sent.', [$sentCount]),
				'infos' => $sendInfos,
			],
			'result' => true
		], Http::STATUS_OK);
	}

	/**
	 * 文件訂閱通知 EMail 模板
	 * @return IEMailTemplate
	 */
	private function mailTemplate_update($shareId, $subscription):IEMailTemplate {

		$ocDefaults = new \OC_Defaults;
		$serverName = $this->config->getAppValue('theming', 'name', $ocDefaults->getTitle());

		$template = $this->mailer->createEMailTemplate('filesubscription.newVersion');
		$template->setSubject("[$serverName] 文件訂閱通知");
		$template->addHeader();
		$template->addHeading('文件訂閱通知'.' ('.$shareId.')');

		$plainText = $subscription->getMessage();
		if (!$plainText || empty($plainText)) {
			$template->addBodyText('您訂閱的文件已發布新版本。');
		} else {
			$text = $subscription->getParsedMessage();
			$template->addBodyText($text, $plainText);
		}

		if($shareLink = $this->getShareLink($shareId) ?? false) {
			$template->addBodyButton($this->l10n->t('Open File'), $shareLink);
		}
		$template->addFooter();
		return $template;
	}

	/**
	 * 取消訂閱通知 EMail 模板
	 * @return IEMailTemplate
	 */
	private function mailTemplate_cancel($shareId):IEMailTemplate {
		$ocDefaults = new \OC_Defaults;
		$serverName = $this->config->getAppValue('theming', 'name', $ocDefaults->getTitle());

		$template = $this->mailer->createEMailTemplate('filesubscription.newVersion');
		$template->setSubject("[$serverName] 文件取消訂閱通知");
		$template->addHeader();
		$template->addHeading('文件取消訂閱通知'.' ('.$shareId.')');
		$template->addBodyText('文件擁有者或文件分享者已取消文件訂閱。');
		$template->addFooter();
		return $template;
	}

	/**
	 * 取得分享連結
	 * @param @shareId
	 * @return string
	 */
	private function getShareLink($shareId) {
		$shareApiClass = 'OCA\Files_Sharing\Controller\ShareAPIController';
		if (class_exists($shareApiClass)) {
			$shareApi = \OC::$server->query($shareApiClass);
			$shareData = $shareApi->getShare($shareId);
			$data = $shareData->getData();
			$url = $data[0]['url'];
			return $url;
		}
	}
}
