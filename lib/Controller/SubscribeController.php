<?php
namespace OCA\FileSubscription\Controller;

use OCP\IRequest;
use OCP\Defaults;
use OCP\IConfig;
use OCP\IUser;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Http\NotFoundResponse;
use OCA\FileSubscription\Manager;
use OCA\FileSubscription\Model\Subscription;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\Share\IShare;
use OCP\Share\IManager as ShareManager;
use OCP\Files\NotFoundException;
use OCA\FileSubscription\Model\SubscriptionDoesNotExistException;
use OCP\AppFramework\Db\DoesNotExistException;


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

		$shareApiClass = 'OCA\Files_Sharing\Controller\ShareAPIController';
		if (class_exists($shareApiClass)) {
			$this->shareApi = \OC::$server->query($shareApiClass);
		}
	}

	/**
	 * 取得 分享連結和訂閱資訊（側邊攔初始化資料）
	 */
	public function index(string $path) {

		if(!$this->shareApi) return new NotFoundResponse();

		// 取得分享連結
		$shares = $this->shareApi->getShares('', '', '', $path, ''); // DataResponse

		// 以 share-id 取得訂閱資訊
		foreach ($shares->getData() as $idx => $share) {

			if ((int)$share['share_type'] === IShare::TYPE_LINK) {
				try {
					$subscription = $this->getSubscription($share['id']); //DataResponse
					$subscriptionData = $subscription->getData();
				} catch (DoesNotExistException $e) {
					$subscriptionData = null;
				}
				$initData[$idx]['sharing'] = $share;
				$initData[$idx]['subscription'] = $subscriptionData;
			}

		}
		return new DataResponse($initData);
	}

	/**
	 * 取得 分享連結和訂閱資訊（側邊攔初始化資料）
	 * @param int $shareId
	 *
	 */
	public function update(int $shareId, $setVal) {
		$subscription = $this->manager->setSubscription($shareId, $setVal);
		$result  = $this->renderSubscription($subscription);
		return new DataResponse($result);
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
			$subscription = $this->manager->setMail($shareId, $mailAddr);
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
