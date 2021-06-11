<?php

namespace OCA\FileSubscription\Model;

use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Db\Entity;
use OCP\AppFramework\Db\QBMapper;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

class SubscriptionLogMapper extends QBMapper {
	public function __construct(IDBConnection $db) {
		parent::__construct($db, 'filesubscription_log', SubscriptionLog::class);
	}

	/**
	 * @param int $subscrId
	 * @throws DoesNotExistException
	 */
	public function getBySubscrId(int $subscrId) {
		$query = $this->db->getQueryBuilder();
		$query->select('*')
			->from($this->getTableName())
			->where(
				$query->expr()->eq('subscr_id', $query->createNamedParameter($subscrId))
			);
		return $this->findEntities($query);
	}

}
