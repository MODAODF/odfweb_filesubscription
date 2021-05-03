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

	/**
	 * @param int $shareId
	 * @param string $shareLink URL of shared file
	 * @throws \Exception If mail could not be sent
	 */
	public function sendMail($shareId) {

		try {
			$subscription = $this->manager->getSubscription($shareId);
		} catch (DoesNotExistException $e) {
			throw new SubscriptionDoesNotExistException();
		}

		$template = $this->mailTemplate($shareId, $subscription->getMessage());

		// Send mail
        $emailArr = \json_decode($subscription->getEmails());
        foreach ($emailArr as $email) {
			$displayName = $email; // TODO 沒有訂閱者名稱
            try {
                $message = $this->mailer->createMessage();
                $message->setTo([$email => $displayName]);
                $message->useTemplate($template);
                $errors = $this->mailer->send($message);
                if (!empty($errors)) {
                    throw new \RuntimeException($this->l10n->t('Email could not be sent. Check your mail server log.'));
                }

                $sendInfos[$displayName]['result'] = true;
                $sendInfos[$displayName]['message'] = $this->l10n->t('Email sent.');

            } catch (\Exception $e) {
                $sendInfos[$displayName]['result'] = false;
                $sendInfos[$displayName]['message'] = $e->getMessage();
            }
        }

		$sentCount = 0; // 傳送成功的數量
		foreach($sendInfos as $displayName => $infos) {
			if($infos['result']) $sentCount ++;
		}

		// if ($sentCount > 0) {
		return new DataResponse([
			'data' => [
				'message' => $this->l10n->t('%s email sent.', [$sentCount]),
				'infos' => $sendInfos
			],
			'result' => true
		], Http::STATUS_OK);
		// } else {
		// 	return new DataResponse([
		// 		'data' => [
		// 			'message' => $this->l10n->t('A problem occurred while sending the email. Please revise your settings.'),
		// 			'infos' => $sendInfos
		// 		],
		// 		'result' => false
		// 	], Http::STATUS_BAD_REQUEST);
		// }
	}

	/**
	 * EMail 模板
	 * @return IEMailTemplate
	 */
	private function mailTemplate($shareId, $msg):IEMailTemplate {

		$ocDefaults = new \OC_Defaults;
		$serverName = $this->config->getAppValue('theming', 'name', $ocDefaults->getTitle());

		$template = $this->mailer->createEMailTemplate('filesubscription.newVersion');
		$template->setSubject("[$serverName] 文件訂閱通知");
		$template->addHeader();
		$template->addHeading('文件訂閱通知'.' ('.$shareId.')');
		$body = $msg ?? '您訂閱的文件已發布新版本。';
		$template->addBodyText($body, $body);
		if($shareLink = $this->getShareLink($shareId) ?? false) {
			$template->addBodyButton($this->l10n->t('Open File'), $shareLink);
		}
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
