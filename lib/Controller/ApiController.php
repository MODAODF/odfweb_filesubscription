<?php
namespace OCA\FileSubscription\Controller;

use \DateTime;
use \DateTimeZone;
use OCP\IRequest;
use OCP\IConfig;
use OCP\IL10N;
use OCP\IURLGenerator;
use OCP\Share\IShare;
use OCP\Share\IManager as ShareManager;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCA\FileSubscription\JSONResponse;
use OCA\FileSubscription\Model\Subscription;
use OCA\FileSubscription\Model\SubscriptionMapper;

class ApiController extends Controller {

	private const DATE_FORMAT = 'Y/m/d'; //  H:i:s
	private const DATE_TIME_ZONE = 'Asia/Taipei';

	/** @var IConfig */
	private $config;

	/** @var SubscriptionMapper */
	protected $subscriptionMapper;

	/** @var IURLGenerator */
	private $url;

	/** @var IL10N */
	private $l;

	/** @var ShareManager */
	protected $shareManager;

	public function __construct($AppName,
								IConfig $config,
								IRequest $request,
								SubscriptionMapper $subscriptionMapper,
								ShareManager $shareManager,
								IURLGenerator $url,
								IL10N $l) {
		parent::__construct($AppName, $request);
		$this->appName = $AppName;
		$this->config = $config;
		$this->subscriptionMapper = $subscriptionMapper;
		$this->shareManager = $shareManager;
		$this->url = $url;
		$this->l = $l;
	}

	/**
	 * 取得 單一 分享檔案狀態
	 *
	 * @NoCSRFRequired
	 * @PublicPage
	 * @NoSameSiteCookieRequired
	 *
	 * @param string $token The share token
	 * @return JSONResponse
	 */
	public function status(string $token) {
		$resp = [];
		try {
			$share = $this->shareManager->getShareByToken($token);
			if ($this->isSubscribed($share->getId())) {
				$resp = $this->generateData([$token]);
			}
		} catch (\Throwable $th) {
		}
		return new JSONResponse($resp, Http::STATUS_OK);
	}

	/**
	 * 取得 所有 分享檔案狀態
	 * 各檔案只取一筆分享連結，且需有被訂閱
	 *
	 * @NoCSRFRequired
	 * @PublicPage
	 * @NoSameSiteCookieRequired
	 *
	 * @return JSONResponse
	 */
	public function statusAll() {
		$tokenList = [];
		$list = $this->subscriptionMapper->getAll();
		foreach($list as $subscr) {
			if ($this->isSubscribed($subscr['share_id'])) {
				$tokenList[$subscr['file_id']] = $subscr['token'];
			}
		}
		$resp = $this->generateData($tokenList);
		return new JSONResponse($resp, Http::STATUS_OK);
	}

	/**
	 * 產生 Respones 資料
	 * @param array $tokenList List of share token
	 * @return array
	 */
	private function generateData(array $tokenList):array {
		$data = [];
		foreach($tokenList as $token) {
			try {
				$share = $this->shareManager->getShareByToken($token);
			} catch (\Throwable $th) {
				$share = null;
			}

			if ($share instanceof IShare) {
				$node = $share->getNode();
				$info["uuid"]       = $share->getNodeId();
				$info["filename"]   = $node->getName();
				$info["timestamp"]  = $this->getFormatDate($node->getMtime());
				$info["url"]        = $this->url->linkToRouteAbsolute('files_sharing.sharecontroller.showShare', ['token' => $share->getToken()]);
				$info["servername"] = $this->url->getBaseUrl('');
				$data[] = $info;
			}
		}
		return $data;
	}

	/**
	 * 檢查是否被訂閱
	 * @param string $shareId
	 * @return bool
	 */
	private function isSubscribed(string $shareId):bool {
		try {
			$subscr = $this->subscriptionMapper->getByShareId($shareId);
			if ($subscr instanceof Subscription) {
				$emails = $subscr->getEmails();
				$emails = \json_decode($emails) ?? array();
				return (!is_null($emails) && count($emails) > 0);
			}
		} catch (\Throwable $th) {
		}
		return false;
	}

	/**
	 * @param int $mtime
	 * @return string
	 */
	private function getFormatDate(int $mtime) {
		$dt = new DateTime("now", new DateTimeZone(self::DATE_TIME_ZONE));
		$dt->setTimestamp($mtime);
		return $dt->format(self::DATE_FORMAT);
	}
}
