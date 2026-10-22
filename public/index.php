<?php

require_once __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../app/bootstrap.php';

use App\Core\Router;

// Instanciar el enrutador una sola vez
$router = new Router();