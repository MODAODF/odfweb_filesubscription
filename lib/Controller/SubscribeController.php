<?php
namespace OCA\FileSubscription\Controller;

use OCP\IRequest;
use OCP\Defaults;
use OCP\IConfig;
use OCP\IUser;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Http\NotFoundResponse;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Utility\ITimeFactory;
use OCA\FileSubscription\Manager;
use OCA\FileSubscription\Model\Subscription;
use OCP\Share\IShare;
use OCP\Share\IManager as ShareManager;
use OCP\Share\Exceptions\ShareNotFound;

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
	 * @NoAdminRequired
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
	 * @NoAdminRequired
	 */
	public function update(int $shareId, $setVal) {
		$subscription = $this->manager->setSubscription($shareId, $setVal);
		$result  = $this->formatDataForFE($subscription);
		return new DataResponse($result);
	}

	/**
	 * 取得單一分享連結的訂閱Emails
	 * @NoAdminRequired
	 */
	private function getSubscription($shareId) {

		// TODO: 只有admin可以讀取訂閱者資料
		// if (!$this->manager->checkIsAdmin()) {
		// 	return new JSONResponse(
		// 		['message' => 'Logged in user must be an admin'],
		// 		Http::STATUS_FORBIDDEN
		// 	);
		$subscription = $this->manager->getSubscription($shareId);
		$result  = $this->formatDataForFE($subscription);
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
		try {
			$shareId = $this->shareManager->getShareByToken($token)->getId();
		} catch (ShareNotFound $e) {
			return new JSONResponse([], Http::STATUS_NOT_FOUND);
		}
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
		try {
			$shareId = $this->shareManager->getShareByToken($token)->getId();
		} catch (ShareNotFound $e) {
			return new JSONResponse([$e->getMessage()], Http::STATUS_NOT_FOUND);
		}

		try {
			$subscription = $this->manager->setMail($shareId, $mailAddr);
		} catch (\Exception $e) {
			return new DataResponse([$e->getMessage()], Http::STATUS_UNPROCESSABLE_ENTITY);
		}
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

	/**
	 * 前端需要的資訊
	 */
	protected function formatDataForFE(Subscription $subscription): array {
		// $result = [
		// 	'id'		=> $subscription->getId(),
		// 	'share_id'	=> $subscription->getShareId(),
		// 	'emails'	=> $subscription->getEmails(),
		// 	'message'	=> $subscription->getParsedMessage(),
		// 	'last_message_time'		=> $subscription->getLastMessageTime(),
		// 	'last_email_time'		=> $subscription->getLastEmailTime(),
		// 	'enabled'   => $subscription->getEnabled(),
		// ];

		$result = [
			'share_id'	    => $subscription->getShareId(),
			'enabled'       => $subscription->getEnabled(),
			'message'	    => $subscription->getMessage(), // $subscription->getParsedMessage()
			'subscriberNum' => 0,
		];

		if ($emails = $subscription->getEmails()) {
			$emailsArr = json_decode($emails, true) ?? array();
			$result['subscriberNum'] = count($emailsArr);
		}
		if ($lastMessageTime = $subscription->getLastMessageTime()) {
			$result['last_message_time'] = date('Y-m-d H:i:s', $lastMessageTime);
		}
		if ($lastEmailTime = $subscription->getLastEmailTime()) {
			$result['last_email_time'] = date('Y-m-d H:i:s', $lastEmailTime);
		}

		return $result;
	}

}
