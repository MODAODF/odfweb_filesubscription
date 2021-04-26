<?php
namespace OCA\FileSubscription\Controller;

use OCP\IRequest;
use OCP\Defaults;
use OCP\IConfig;
use OCP\IUser;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\JSONResponse;
use OCA\FileSubscription\Manager;
use OCA\FileSubscription\Model\Subscription;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\Share\IManager as ShareManager;
use OCP\Files\NotFoundException;

class SubscribeController extends Controller {

	/** @var IConfig */
	private $config;

	/** @var Manager */
	private $manager;

	/** @var ITimeFactory */
	protected $timeFactory;

	/** @var ShareManager */
	protected $shareManager;

	public function __construct($AppName,
								IConfig $config,
								IRequest $request,
								Manager $manager,
								ITimeFactory $timeFactory,
								ShareManager $shareManager) {
		parent::__construct($AppName, $request);
		$this->appName = $AppName;
		$this->config = $config;
		$this->manager = $manager;
		$this->timeFactory = $timeFactory;
		$this->shareManager = $shareManager;
	}

	// /**
	//  * 取得單一分享連結的訂閱Emails
	//  */
	// public function getSubscription($shareId) {

	// 	// TODO: 只有admin可以讀取訂閱者資料
	// 	// if (!$this->manager->checkIsAdmin()) {
	// 	// 	return new JSONResponse(
	// 	// 		['message' => 'Logged in user must be an admin'],
	// 	// 		Http::STATUS_FORBIDDEN
	// 	// 	);
	// 	// }

	// 	$subscription = $this->manager->getSubscription($shareId);
	// 	$result  = $subscription; // ->getMessage();
	// 	return new JSONResponse($result);
	// }

	/**
	 * 加入訂閱 Email
	 *
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 * @PublicPage
	 *
	 * @param string $sharingToken
	 * @param string $mailAddr
	 *
	 */
	public function addSubscriber(string $sharingToken, string $mailAddr) {

		// 取得 shareId
		try {
			$shareId = $this->shareManager->getShareByToken($sharingToken)->getId();
		} catch (\Exception $e) {
			return new JSONResponse(
				['error' => 'fail to get ShareId By Token' . $e],
				Http::STATUS_BAD_REQUEST
			);
		}

		try {
			$subscription = $this->manager->subscribe($shareId, $mailAddr, $this->timeFactory->getTime());
		} catch (\InvalidArgumentException $e) {
			return new JSONResponse(
				['error' => $e],
				Http::STATUS_BAD_REQUEST
			);
		}

		return new JSONResponse($this->renderSubscription($subscription));
	}

	// /**
	//  * 取消訂閱 Email
	//  *
	//  * @NoAdminRequired
	//  * @NoCSRFRequired
	//  * @PublicPage
	//  *
	//  * @param string $sharingToken
	//  * @param string $mailAddr
	//  *
	//  */
	// private function deleteSubscriber(string $sharingToken, string $mailAddr) {}

	protected function renderSubscription(Subscription $subscription): array {
		$result = [
			'id'		=> $subscription->getId(),
			'share_id'	=> $subscription->getShareId(),
			'emails'	=> $subscription->getEmails(),
			'message'	=> $subscription->getParsedMessage(),
			'time'		=> $subscription->getTime(),
			'enabled'   => $subscription->getEnabled(),
		];
		return $result;
	}

}
