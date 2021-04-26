<?php

namespace OCA\FileSubscription\Model;

use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Db\Entity;
use OCP\AppFramework\Db\QBMapper;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

class SubscriptionMapper extends QBMapper {
	public function __construct(IDBConnection $db) {
		parent::__construct($db, 'filesubscription', Subscription::class);
	}

	/**
	 * @param int $shareId
	 * @return Subscription
	 * @throws DoesNotExistException
	 */
	public function getByShareId(int $shareId): Subscription {
		$query = $this->db->getQueryBuilder();
		$query->select('*')
			->from($this->getTableName())
			->where(
				$query->expr()->eq('share_id', $query->createNamedParameter($shareId))
			);
		return $this->findEntity($query);
	}

}
