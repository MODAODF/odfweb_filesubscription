<?php

namespace OCA\FileSubscription\Listener;

use OCA\FileSubscription\AppInfo\Application;
use OCA\Files\Event\LoadSidebar;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Util;

class LoadSidebarScripts implements IEventListener {
	public function handle(Event $event): void {
		if (!($event instanceof LoadSidebar)) {
			return;
		}

		Util::addScript(Application::APP_ID, 'filesubscription');

		// Util::addScript(Application::APP_ID, 'plugin');
		// Util::addScript(Application::APP_ID, 'tabview');
	}
}
