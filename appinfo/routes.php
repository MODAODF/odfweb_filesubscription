<?php

return [
	'routes' => [
		['name' => 'mail#sendMail', 'url' => '/mail', 'verb' => 'post'],

		['name' => 'subscribe#getSubscription', 'url' => '/subscribe/{shareId}', 'verb' => 'get'],
		['name' => 'subscribe#addSubscriber', 'url' => '/subscribe', 'verb' => 'POST'],
	]
];
