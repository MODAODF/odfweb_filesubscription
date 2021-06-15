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
use OCP\AppFramework\OCS\OCSNotFoundException;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Utility\ITimeFactory;
use OCA\FileSubscription\Manager;

class LogController extends Controller {

	/** @var IConfig */
	private $config;

	/** @var Manager */
	private $manager;

	public function __construct($AppName,
								IConfig $config,
								IRequest $request,
								Manager $manager) {
		parent::__construct($AppName, $request);
		$this->appName = $AppName;
		$this->config = $config;
		$this->manager = $manager;
	}

	/**
	 * 刪除訂閱和紀錄
	 * @NoAdminRequired
	 */
	public function deleteAll(int $shareId) {
		try {
			$subscription = $this->manager->getSubscrByShareId($shareId);
		} catch (SubscriptionDoesNotExistException $e) {
			return new DataResponse([], Http::STATUS_BAD_REQUEST);
		}
		// $user = \OC::$server->getUserSession()->getUser()->getUID();
		// $owner = $subscription->getOwnerUid();
		// if ($user !== $owner) {
		// 	return new DataResponse(['無刪除權限'], Http::STATUS_BAD_REQUEST);
		// }

		$subscrId = $subscription->getId();
		$deleted = $this->manager->deleteBySubscrId($subscrId);
		return new DataResponse([], Http::STATUS_OK);
	}
}
