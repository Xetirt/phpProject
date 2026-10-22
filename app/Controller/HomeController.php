<?php
namespace App\Controller;
use App\Core\DB;

class HomeController{
    function  index(){
        $db = DB::getConnection();
        return view('home',['title'=>'Home']);
    }
    function contact(){
        return view('contact',['title'=>'Contact']);
    }
}