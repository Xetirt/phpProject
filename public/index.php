
<?php

require_once __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../app/bootstrap.php';

use App\Core\Router;

// Instanciar el enrutador una sola vez
$router = new Router();

require __DIR__.'/../core/router.php';

$uri=parse_url($_SERVER['REQUEST_URI'],PHP_URL_PATH);

$controller=router($uri)[0];

var_dump($controller,$action,$id);

$routes = ['home','contact','about'];

if(in_array($controller,$routes)){
    require__DIR__.'/../app/controllers/'.$controller.'.php';
}

?>

