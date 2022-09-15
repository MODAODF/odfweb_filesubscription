<?php
declare(strict_types=1);

namespace OCA\FileSubscription\Listener;

use OCA\FileSubscription\AppInfo\Application;
use OCA\FileSubscription\Manager;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCA\Files_Sharing\Event\BeforeTemplateRenderedEvent as SharingBeforeTemplateRenderedEvent;
use OCP\Share\Exceptions\ShareNotFound;

class BeforeSharingRenderedListener implements IEventListener {
	private Manager $manager;

	public function __construct(Manager $manager) {
		$this->manager = $manager;
	}

	/**
	 * 檢查有沒有開放訂閱->導覽列載入訂閱欄位
	 */
	public function handle(Event $event): void {
		if (!($event instanceof SharingBeforeTemplateRenderedEvent)) {
			return;
		}

		try {
			$share = $event->getShare();
			$isOwnerCreate = $share->getSharedBy() === $share->getShareOwner();
		} catch (ShareNotFound $e) {
			return;
		}
		if ($isOwnerCreate) {
			$shareId = (int)$share->getId();
			$isEnabled = $this->manager->getEnabled($shareId);
			if ($isEnabled) {
				\OCP\Util::addScript(Application::APP_ID, 'dist/sharedfile');
				\OCP\Util::addScript(Application::APP_ID, 'templates');
			}
		}
	}
}
