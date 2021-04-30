<?php
namespace OCA\FileSubscription\Controller;

use OCP\IRequest;
use OCP\Defaults;
use OCP\IConfig;
use OCP\IUser;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Http\DataResponse;
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

	/**
	 * 取得單一分享連結的訂閱Emails  @AdminRequired
	 * @NoAdminRequired
	 * @PublicPage
	 *
	 */
	public function getSubscription($shareId) {

		// TODO: 只有admin可以讀取訂閱者資料
		// if (!$this->manager->checkIsAdmin()) {
		// 	return new JSONResponse(
		// 		['message' => 'Logged in user must be an admin'],
		// 		Http::STATUS_FORBIDDEN
		// 	);
		$subscription = $this->manager->getSubscription($shareId);
		$result  = $this->renderSubscription($subscription);
		return new DataResponse($result);
	}

	/**
	 * 取得單一分享連結的訂閱啟用值
	 * @NoAdminRequired
	 * @PublicPage
	 *
	 * @param string $token
	 */
	public function getState(string $token) {
		$shareId = $this->getShareId($token);
		$status = $this->manager->getEnabled($shareId);
		return new JSONResponse($status);
	}
	/**
	 * 設定單一分享連結的訂閱啟用值
	 * @param int $shareId
	 * @param bool $setVal
	 */
	public function setState(int $shareId, bool $setVal) {
		$this->manager->setEnabled($shareId, $setVal);
	}

	/**
	 * 加入訂閱 Email
	 *
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 * @PublicPage
	 *
	 * @param string $token
	 * @param string $mailAddr
	 *
	 */
	public function addSubscriber(string $token, string $mailAddr) {

		$shareId = $this->getShareId($token);

		try {
			$subscription = $this->manager->subscribe($shareId, $mailAddr, $this->timeFactory->getTime());
		} catch (\InvalidArgumentException $e) {
			return new JSONResponse(
				['error' => $e],
				Http::STATUS_BAD_REQUEST
			);
		}
		return new JSONResponse(
			$this->renderSubscription($subscription)
		);
	}

	/**
	 *  用 share token 取得 shareId
	 * @param string $token
	 */
	private function getShareId(string $token) {
		try {
			$shareId = $this->shareManager->getShareByToken($token)->getId();
		} catch (\Exception $e) {
			return new JSONResponse(
				['error' => 'fail to get ShareId By Token' . $e],
				Http::STATUS_BAD_REQUEST
			);
		}
		return $shareId;
	}

	// /**
	//  * 取消訂閱 Email
	//  *
	//  * @NoAdminRequired
	//  * @NoCSRFRequired
	//  * @PublicPage
	//  *
	//  * @param string $token
	//  * @param string $mailAddr
	//  *
	//  */
	// private function deleteSubscriber(string $token, string $mailAddr) {}

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
