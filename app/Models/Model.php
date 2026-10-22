<?php

namespace App\Models;

use PDO;
use App\Core\DB;

abstract class Model {
    protected PDO $db;
    protected string $taula;
    public function __construct()
    {
        $this->db=DB::getConnection();
    }

    public function getById(int $id):?array{
        $stmt=$this->db->prepare("SELECT * FROM {$this->taula} WHERE id=:id");
        $stmt->execute([':id'=>$id]);
        return $stmt->fetch() ? :null;
    }

    public function create(array $data){
        $values=array_filter(array_values($data), function($v){
            return is_string($v) ? :"'".$v."'";
        });
        $fields = implode(',', array_keys($data));
    $sql="INSERT INTO {} VALUES";
    $stmt=$this->db->prepare($sql);
    $stmt->execute();
    }

    public function update(){
        $sql="UPDATE INTO {} VALUES";
    $stmt=$this->db->prepare($sql);
    $stmt->execute();
    }
    }
