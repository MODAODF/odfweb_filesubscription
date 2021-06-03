<?php

namespace OCA\FileSubscription;

use OCA\FileSubscription\Model\Subscription;
use OCA\FileSubscription\Model\SubscriptionDoesNotExistException;
use OCA\FileSubscription\Model\SubscriptionMapper;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\IConfig;
use OCP\IUser;
use OCP\IUserSession;

class Manager {

	/** @var IConfig */
	protected $config;

	/** @var SubscriptionMapper */
	protected $subscriptionMapper;

	/** @var ITimeFactory */
	protected $timeFactory;

	public function __construct(IConfig $config, SubscriptionMapper $subscriptionMapper, ITimeFactory $timeFactory) {
		$this->config = $config;
		$this->subscriptionMapper = $subscriptionMapper;
		$this->timeFactory = $timeFactory;
	}

	/**
	 * 設定訂閱資訊
	 * @param int $shareId
	 * @return Subscription
	 * @throws SubscriptionDoesNotExistException
	 */
	public function setSubscription(int $shareId, $setVal): Subscription {

		try {
			$isNewShareId = false;
			$subscription = $this->subscriptionMapper->getByShareId($shareId);
		} catch (DoesNotExistException $e) {
			$isNewShareId = true;
		}

		if ($isNewShareId) {
			$subscription = new Subscription();
			$subscription->setShareId($shareId);
		}

		if ($val_enabled = $setVal['enabled']) {
			$subscription->setEnabled( $val_enabled === 'true' ? 1:0 );
		}

		if (isset($setVal['message'])) {
			$val_message = trim($setVal['message']);
			$subscription->setMessage( empty($val_message) ? null : $val_message );
		}

		if (isset($setVal['emails']) && $setVal['emails'] === 'cancel') {
			$subscription->setEmails(null); // 取消訂閱
		}

		if ($setVal['updateMessageTime']) {
			$subscription->setLastMessageTime($this->timeFactory->getTime());
		}

		if ($setVal['updateEmailTime']) {
			$subscription->setLastEmailTime($this->timeFactory->getTime());
		}

		if ($setVal['cancelTime']) {
			$subscription->setLastCancelTime($this->timeFactory->getTime());
		}

		if ($isNewShareId) {
			$this->subscriptionMapper->insert($subscription);
		}
		if (!$isNewShareId && $subscription instanceof Subscription) {
			$this->subscriptionMapper->update($subscription);
		}
		return $subscription;
	}

	/**
	 * 取得單一訂閱資訊
	 * @param int $shareId
	 * @return Subscription
	 * @throws SubscriptionDoesNotExistException
	 */
	public function getSubscription(int $shareId): Subscription {
		// TODO 只有admin或 有ShareLink權限的user 可以取得
		try {
			$subscription = $this->subscriptionMapper->getByShareId($shareId);
		} catch (DoesNotExistException $e) {
			throw new SubscriptionDoesNotExistException();
		}
		return $subscription;
	}

	/**
	 * 取得單一分享連結 是否啟用
	 * @param int $shareId
	 * @return int $isEnable
	 */
	public function getEnabled(int $shareId) {
		try {
			$subscription = $this->subscriptionMapper->getByShareId($shareId);
			$isEnabled = $subscription->getEnabled();
		} catch (DoesNotExistException $e) {
			$isEnabled = ture;
		}
		return $isEnabled;
	}

	/**
	 * 加入新的訂閱者
	 * @param int $shareId
	 * @param string $mailAddr
	 * @return Subscription
	 * @throws \Exception
	 */
	public function addIntoEmails(int $shareId, string $mailAddr): Subscription {
		$mailAddr = trim($mailAddr);
		$mailer = \OC::$server->getMailer();
		$validMail = $mailer->validateMailAddress($mailAddr);
		if (!empty($mailAddr) && !$validMail) {
			throw new \Exception('Invalid mail address');
		}

		try {
			$isNewShareId = false;
			$subscription = $this->subscriptionMapper->getByShareId($shareId);
		} catch (DoesNotExistException $e) {
			$isNewShareId = true;
		}

		// 新的分享連結
		if ($isNewShareId) {
			$subscription = new Subscription();
			$subscription->setShareId($shareId);
			$subscription->setEmails(json_encode(array($mailAddr)));
			$this->subscriptionMapper->insert($subscription);
		}

		// 已經存在的分享連結
		if (!$isNewShareId && $subscription instanceof Subscription) {
			$db_emailsStr = $subscription->getEmails();
			$db_emailsArr = \json_decode($db_emailsStr) ?? array();
			if (!in_array($mailAddr, $db_emailsArr)) {
				array_push($db_emailsArr, $mailAddr);
				$subscription->setEmails(\json_encode(array_values($db_emailsArr)));
				$this->subscriptionMapper->update($subscription);
			}
		}
		return $subscription;
	}

	/**
	 * 取消訂閱者
	 * @param int $shareId
	 * @param string $mailAddr
	 * @throws \Exception
	 */
	public function rmFromEmails(int $shareId, string $mailAddr) {
		$mailAddr = trim($mailAddr);
		$mailer = \OC::$server->getMailer();
		$validMail = $mailer->validateMailAddress($mailAddr);
		if (!empty($mailAddr) && !$validMail) {
			throw new \Exception('Invalid mail address');
		}

		try {
			$subscription = $this->subscriptionMapper->getByShareId($shareId);
		} catch (DoesNotExistException $e) {
			return true;
		}

		$mailAddr = trim($mailAddr);
		if ($subscription instanceof Subscription) {
			$db_emailsStr = $subscription->getEmails();
			$db_emailsArr = \json_decode($db_emailsStr) ?? array();
			if (in_array($mailAddr, $db_emailsArr)) {
				if (($key = array_search($mailAddr, $db_emailsArr)) !== false) {
					unset($db_emailsArr[$key]);
				}
				$subscription->setEmails(\json_encode(array_values($db_emailsArr)));
				$this->subscriptionMapper->update($subscription);
			}
		}
	}

}
