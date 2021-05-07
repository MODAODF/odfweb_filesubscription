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
	 * Unsharing event: 檢查有沒有訂閱，有人訂閱就不給刪
	 *
	 * @param GenericEvent $event
	 * @throws OCSBadRequestException
	 */
	public static function unShare(GenericEvent $event) {
		$share = $event->getSubject();
		if ($share instanceof IShare) {
			$shareId = $share->getId();
			$manager = \OC::$server->query(Manager::class);

			try {
				$subscription = $manager->getSubscription($shareId);
				$emails = $subscription->getEmails();
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
}
