<?php

return [
	'routes' => [
		['name' => 'mail#sendMail', 'url' => '/mail', 'verb' => 'POST'],

		['name' => 'subscribe#index', 'url' => '/', 'verb' => 'GET'],
		['name' => 'subscribe#update', 'url' => '/update/{id}', 'verb' => 'POST'],

		['name' => 'subscribe#getSubscription', 'url' => '/subscribe/{shareId}', 'verb' => 'GET'],
		['name' => 'subscribe#addSubscriber', 'url' => '/subscribe', 'verb' => 'POST'],

		['name' => 'subscribe#getState', 'url' => '/subscribe/state/{token}', 'verb' => 'GET'],
	]
];
