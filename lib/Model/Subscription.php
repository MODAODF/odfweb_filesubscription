<?php

namespace OCA\FileSubscription\Model;

use OCP\AppFramework\Db\Entity;

class Subscription extends Entity {

	/** @var int */
	protected $shareId;

	/** @var string */
	protected $emails;

	/** @var string */
	protected $message;

	/** @var int */
	protected $lastMessageTime;

	/** @var int */
	protected $lastEmailTime;

	/** @var int */
	protected $lastCancelTime;

	/** @var int */
	protected $enabled;

	public function __construct() {
		$this->addType('shareId', 'int');
		$this->addType('emails', 'string');
		$this->addType('message', 'string');
		$this->addType('lastMessageTime', 'int');
		$this->addType('lastEmailTime', 'int');
		$this->addType('lastCancelTime', 'int');
		$this->addType('enabled', 'int');
	}

	public function getParsedMessage(): string {
		return str_replace(['<', '>', "\n"], ['&lt;', '&gt;', '<br />'], parent::getMessage());
	}
}
