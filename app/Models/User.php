<?php

namespace App\Models;
 
//use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Model;
//use Illuminate\Foundation\Auth\User as Authenticatable;
//use Illuminate\Notifications\Notifiable;
//use Laravel\Sanctum\HasApiTokens;
use ImmaginiUser;
use Carrello;
use Session;
class User extends Model
{
    public function immaginis(){
        return $this->belongsToMany('App\Models\Immagini');
        
    }
    public function carrellos(){
        return $this->belongsToMany('App\Models\Immagini','carrello');
    }

    public function commentos(){
        return $this->belongsToMany('App\Models\Immagini','commenti')->withPivot('commento');
    }

  
}
  