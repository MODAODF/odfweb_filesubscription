<?php

namespace OCA\FileSubscription\Migration;

use Closure;
use Doctrine\DBAL\Types\Types;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/**
 * Auto-generated migration step: Please modify to your needs!
 */
class Version1000Date20210416134634 extends SimpleMigrationStep {

	// /**
	//  * @param IOutput $output
	//  * @param Closure $schemaClosure The `\Closure` returns a `ISchemaWrapper`
	//  * @param array $options
	//  */
	// public function preSchemaChange(IOutput $output, Closure $schemaClosure, array $options) {
	// }

	/**
	 * @param IOutput $output
	 * @param Closure $schemaClosure The `\Closure` returns a `ISchemaWrapper`
	 * @param array $options
	 * @return null|ISchemaWrapper
	 */
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options) {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('filesubscription')) {
			$table = $schema->createTable('filesubscription');
			$table->addColumn('id', Types::INTEGER, [
				'autoincrement' => true,
				'notnull' => true,
				'length' => 4,
			]);
			$table->addColumn('share_id', Types::INTEGER, [
				'notnull' => true,
				'length' => 4,
			]);
			$table->addColumn('emails', Types::TEXT, [
				'notnull' => false,
				'default' => '',
			]);
			$table->addColumn('message', Types::TEXT, [
				'notnull' => false,
				'default' => '',
			]);
			$table->addColumn('last_message_time', Types::INTEGER, [
				'notnull' => false,
				'length' => 4,
			]);
			$table->addColumn('last_email_time', Types::INTEGER, [
				'notnull' => false,
				'length' => 4,
			]);
			$table->addColumn('enabled', Types::SMALLINT, [
				'notnull' => true,
				'length' => 1,
				'default' => 1
			]);

			$table->setPrimaryKey(['id']);
			$table->addUniqueIndex(['share_id'], 'subscription_shareid_idx');

		}

		return $schema;
	}

	// /**
	//  * @param IOutput $output
	//  * @param Closure $schemaClosure The `\Closure` returns a `ISchemaWrapper`
	//  * @param array $options
	//  */
	// public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options) {
	// }
}
