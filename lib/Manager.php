<?php

namespace OCA\FileSubscription;

use OCA\FileSubscription\Model\Subscription;
use OCA\FileSubscription\Model\SubscriptionDoesNotExistException;
use OCA\FileSubscription\Model\SubscriptionMapper;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\IConfig;
use OCP\IUser;
use OCP\IUserSession;

class Manager {

	/** @var IConfig */
	protected $config;

	/** @var SubscriptionMapper */
	protected $subscriptionMapper;


	public function __construct(IConfig $config, SubscriptionMapper $subscriptionMapper) {
		$this->config = $config;
		$this->subscriptionMapper = $subscriptionMapper;
	}

	/**
	 * @param int $shareId
	 * @param string $mailAddr
	 * @param int $time
	 * @return Subscription
	 * @throws \InvalidArgumentException when the subject is empty or invalid
	 */
	public function subscribe(int $shareId, string $mailAddr, int $time): Subscription {
		$mailAddr = trim($mailAddr);

		// TODO: 檢查 mailAddr 字串
		if (!$this->checkMailAddr($mailAddr)) {
			// throw new \InvalidArgumentException('Invalid mail address', 1);
		}

		try {
			$subscription = $this->subscriptionMapper->getByShareId($shareId);
		} catch (DoesNotExistException $e) {
			$isNewShareId = true;
		}

		// 新的分享連結
		if ($isNewShareId) {
			$subscription = new Subscription();
			$subscription->setShareId($shareId);
			$subscription->setEmails(json_encode(array($mailAddr)));
			$subscription->setTime($time);
			// $subscription->setEnabled(1);
			$this->subscriptionMapper->insert($subscription);
			return $subscription;
		}

		// 已經存在的分享連結
		if (!$isNewShareId && $subscription instanceof Subscription) {
			$db_emailsStr = $subscription->getEmails();
			$db_emailsArr = \json_decode($db_emailsStr);
			array_push($db_emailsArr, $mailAddr);

			$subscription->setEmails(json_encode($db_emailsArr));
			$this->subscriptionMapper->update($subscription);
		}

		return $subscription;
	}

	/**
	 * @param int $shareId
	 * @return Subscription
	 * @throws SubscriptionDoesNotExistException
	 */
	public function getSubscription(int $shareId): Subscription {
		try {
			$subscription = $this->subscriptionMapper->getByShareId($shareId);
		} catch (DoesNotExistException $e) {
			throw new SubscriptionDoesNotExistException();
		}

		return $subscription;
	}

	// TODO
	private function checkMailAddr($mailAddr) {
		return true;
	}

}
