<?php

namespace OCA\FileSubscription\AppInfo;

use OCA\Files\Event\LoadSidebar;
use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\Util;
use OCA\FileSubscription\Listener\LoadSidebarScripts;

class Application extends App implements IBootstrap {
	public const APP_ID = 'filesubscription';

	public function __construct() {
		parent::__construct(self::APP_ID);
	}

	public function register(IRegistrationContext $context): void {
		$context->registerEventListener(LoadSidebar::class, LoadSidebarScripts::class);
	}

	public function boot(IBootContext $context): void {
	}

}
