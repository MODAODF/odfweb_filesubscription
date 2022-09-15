<?php

namespace OCA\FileSubscription\AppInfo;

use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\Util;
use OCA\Files\Event\LoadSidebar;
use OCP\Files\Events\Node\BeforeNodeDeletedEvent;
use OCA\FileSubscription\Listener\LoadSidebarScripts;
use OCP\EventDispatcher\IEventDispatcher;
use OCA\FileSubscription\ShareHooks;
use OCA\FileSubscription\Listener\BeforeDeleteListener;
use OCA\FileSubscription\Listener\BeforeSharingRenderedListener;
use OCA\Files_Sharing\Event\BeforeTemplateRenderedEvent as SharingBeforeTemplateRenderedEvent;

class Application extends App implements IBootstrap {
	public const APP_ID = 'filesubscription';

	public function __construct() {
		parent::__construct(self::APP_ID);
	}

	public function register(IRegistrationContext $context): void {

		$context->registerEventListener(LoadSidebar::class, LoadSidebarScripts::class);
		$context->registerEventListener(SharingBeforeTemplateRenderedEvent::class, BeforeSharingRenderedListener::class);
		$context->registerEventListener(BeforeNodeDeletedEvent::class, BeforeDeleteListener::class);

		// 分享連結hook
		$dispatcher = $this->getContainer()->query(IEventDispatcher::class);
		$dispatcher->addListener('OCP\Share::postShare', [ShareHooks::class, 'postShare']);
		$dispatcher->addListener('OCP\Share::preUnshare', [ShareHooks::class, 'preUnshare']);
		$dispatcher->addListener('OCP\Share::postUnshare', [ShareHooks::class, 'postUnshare']);
	}

	public function boot(IBootContext $context): void {
	}

}
