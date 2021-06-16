<?php
namespace OCA\FileSubscription;

use OCP\Share\IShare;
use Symfony\Component\EventDispatcher\GenericEvent;
use OCP\AppFramework\OCS\OCSBadRequestException;
use OCP\AppFramework\OCS\OCSException;
// use OCP\AppFramework\OCS\OCSForbiddenException;
use OCA\FileSubscription\Manager;
use OCA\FileSubscription\Model\SubscriptionDoesNotExistException;

class ShareHooks {

	/**
	 * Unsharing event: 刪除分享連結前，檢查有沒有訂閱
	 *
	 * @param GenericEvent $event
	 * @throws OCSBadRequestException
	 */
	public static function preUnshare(GenericEvent $event) {
		$share = $event->getSubject();
		if ($share instanceof IShare) {
			$shareId = $share->getId();
			$manager = \OC::$server->query(Manager::class);

			try {
				$subscription = $manager->getSubscrByShareId($shareId);
				$emails = $subscription->getEmails();

				$setVal['fileName'] = $share->getNode()->getName();
				$setVal['shareLabel'] = $share->getLabel();
				$manager->setSubscription($shareId, $setVal);
			} catch (SubscriptionDoesNotExistException $e) {
				return;
			}

			if (!$emails || count($emails) === 0) return;
			$emailsArr = \json_decode($emails, true);
			if (count($emailsArr) > 0) {
				throw new OCSBadRequestException('此分享連結尚有訂閱者，無法取消分享');
			}
		}
	}
	/**
	 * postUnshare event: 刪除share連結之後，
	 *
	 * @param GenericEvent $event
	 * @throws OCSBadRequestException
	 */
	public static function postUnshare(GenericEvent $event) {
		// return;
	}

	/**
	 * postShare event: 建立share連結後，建訂閱資料
	 *
	 * @param GenericEvent $event
	 * @throws OCSBadRequestException
	 */
	public static function postShare(GenericEvent $event) {
		$currentUser = \OC::$server->getUserSession()->getUser()->getUID();
		$share = $event->getSubject();
		$shareType = $share->getShareType();

		$node = $share->getNode();
		$fileOwner = $node->getOwner()->getUid();

		if ($currentUser === $fileOwner && $shareType === IShare::TYPE_LINK) {
			\OC::$server->query(Manager::class)->createSubscription($share->getId(), $node->getId(), $fileOwner);
		}

	}
}
