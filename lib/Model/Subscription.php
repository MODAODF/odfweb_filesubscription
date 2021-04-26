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
	protected $time;

	/** @var int */
	protected $enabled;

	public function __construct() {
		$this->addType('shareId', 'int');
		$this->addType('emails', 'string');
		$this->addType('message', 'string');
		$this->addType('time', 'int');
		$this->addType('enabled', 'int');
	}

	public function getParsedMessage(): string {
		return str_replace(['<', '>', "\n"], ['&lt;', '&gt;', '<br />'], parent::getMessage());
	}
}
