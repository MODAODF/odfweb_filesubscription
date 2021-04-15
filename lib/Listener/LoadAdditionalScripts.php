<?php

namespace OCA\FileSubscription\Listener;

use OCA\FileSubscription\AppInfo\Application;
use OCA\Files\Event\LoadAdditionalScriptsEvent;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Util;

class LoadAdditionalScripts implements IEventListener {
	public function handle(Event $event): void {
		if (!($event instanceof LoadAdditionalScriptsEvent)) {
			return;
		}

		Util::addScript(Application::APP_ID, 'filesubscription');
		// Util::addScript(Application::APP_ID, 'plugin');
		// Util::addScript(Application::APP_ID, 'tabview');
	}
}
