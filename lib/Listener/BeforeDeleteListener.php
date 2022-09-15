<?php
declare(strict_types=1);

namespace OCA\FileSubscription\Listener;

use OCA\FileSubscription\AppInfo\Application;
// use OC\HintException;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Files\Events\Node\BeforeNodeDeletedEvent;
use OCA\FileSubscription\Manager;

class BeforeDeleteListener implements IEventListener {
	private Manager $manager;

	public function __construct(Manager $manager) {
		$this->manager = $manager;
	}

	/**
	 * 刪除檔案前，檢查有沒有訂閱者
	 */
	public function handle(Event $event): void {
		if (!($event instanceof BeforeNodeDeletedEvent)) {
			return;
		}

		$fileId = $event->getNode()->getId();
		$subscriptions = $this->manager->getSubscrByFileId($fileId);
		foreach ($subscriptions as $subscr) {
			$emails = $subscr->getEmails() ?? null;
			if (!is_null($emails) && count(json_decode($emails)) > 0) {
				throw new \OCP\HintException('此檔案/資料夾尚有訂閱者');
			}
		}
	}
}
