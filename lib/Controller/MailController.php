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
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Http\JSONResponse;

class MailController extends Controller {

	/** @var IConfig */
	private $config;
	/** @var IURLGenerator */
	private $urlGenerator;
	/** @var IMailer */
	private $mailer;
	/** @var IL10N */
	private $l10n;


	public function __construct($AppName,
								IConfig $config,
								IRequest $request,
								IURLGenerator $urlGenerator,
								IMailer $mailer,
								IL10N $l10n) {
		parent::__construct($AppName, $request);
		$this->appName = $AppName;
		$this->config = $config;
		$this->urlGenerator = $urlGenerator;
		$this->mailer = $mailer;
		$this->l10n = $l10n;
	}

	/**
	 *
	 * @param IUser $user
	 * @param IEmailTemplate $emailTemplate
	 * @throws \Exception If mail could not be sent
	 */
	public function sendMail($shareLink) {

		// server name
		$ocDefaults = new \OC_Defaults;
		$serverName = $this->config->getAppValue('theming', 'name', $ocDefaults->getTitle());

        $emailArr = array('testUser'=>'testUser@ossii.com.tw');

        foreach ($emailArr as $displayName => $email) {

            // send mail
            try {
                $template = $this->mailer->createEMailTemplate('filesubscription.newVersion');
                $template->setSubject("[$serverName] 文件訂閱通知");
                $template->addHeader();
                $template->addHeading('文件訂閱通知');
                $body = '<h4><u>你訂閱的文件發布新版本囉</u><h4>';
                $template->addBodyText($body, $body);
                $template->addFooter();

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

		$sentCount = 0;
		foreach($sendInfos as $displayName => $infos) {
			if($infos['result']) $sentCount ++;
		}

		if ($sentCount > 0) {
			return new DataResponse([
				'data' => [
					'message' => $this->l10n->t('%s email sent.', [$sentCount]),
					'infos' => $sendInfos
				],
				'result' => true
			]);
		} else {
			return new DataResponse([
				'data' => [
					'message' => $this->l10n->t('A problem occurred while sending the email. Please revise your settings.'),
					'infos' => $sendInfos
				],
				'result' => false
			]);
	    }

	}
}
