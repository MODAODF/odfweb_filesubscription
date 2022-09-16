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

		$appid = Application::APP_ID;
		Util::addScript($appid, $appid.'-plugin');
		Util::addScript($appid, $appid.'-tabview');
		Util::addScript($appid, $appid.'-templates');
	}
}
