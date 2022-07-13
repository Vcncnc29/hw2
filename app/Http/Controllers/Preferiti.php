<?php


namespace App\Http\Controllers;
use Session;
use DB;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller;
use App\Models\User;
use App\Models\Immagini;
use App\Models\ImmaginiUser;
class Preferiti extends Controller{

    public function vista(){
        if(!Session::get('user_id')){
            return redirect('login');
        }
        $date=date("d-m-y");
        $user=User::find(Session::get('user_id'));
        return view('preferiti')->with("nome",$user->nome)->with("data",$date);
    }

    
}