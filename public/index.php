<?php

require_once __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../app/bootstrap.php';

use App\Core\Router;

// Instanciar el enrutador una sola vez
$router = new Router();

require __DIR__ . '/../core/router.php';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Desestructuramos el array para capturar también action e id que usas más abajo
[$controller, $action, $id] = router($uri);

var_dump($controller, $action, $id);

$routes = ['home', 'contact', 'about'];

if (in_array($controller, $routes)) {
    // Se añadió el espacio faltante entre require y __DIR__
    require __DIR__ . '/../app/controllers/' . $controller . '.php';
}