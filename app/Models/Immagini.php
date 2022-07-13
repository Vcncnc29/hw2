<?php

namespace App\Models;
use Carrello;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;
class Immagini extends Model{
    public function users(){
        return $this->belongsToMany('App\Models\User');
    }
    public function carrellos(){
        return $this->belogsToMany('App\Models\User');
    }
    public function commentos(){
        return $this->belongsToMany('App\Models\User');
    }

} 