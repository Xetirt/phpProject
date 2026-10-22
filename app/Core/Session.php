<?php

class Session{
    public static function start(){
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }
    }

    public static function set(string $key, mixed $value){
        $_SESSION[$key] = $value;
    }
}