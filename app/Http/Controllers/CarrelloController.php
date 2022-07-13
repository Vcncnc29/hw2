<?php


namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\User;
use App\Models\Carrello;
use App\Models\immagini;
use Session;
use App\Models\Commenti;

class CarrelloController extends BaseController{
    public function vista(){
        if(!Session::get('user_id')){
            return redirect('login');
        }
        $date=date("d-m-y");
        $user=User::find(Session::get('user_id'));
        return view('carrello')->with("nome",$user->nome)->with("data",$date);
    }
    public function list(){
        $carrello=User::find(Session::get('user_id'))->carrellos()->get();
        return $carrello;
    }
    public function aggiungi(){
        $item=Carrello::where('immagini_id',request('id'))->where('user_id',Session::get('user_id'))->first();
        if(!$item){
        $item=new Carrello;
        $item->user_id=Session::get('user_id');
        $item->immagini_id=request('id');
        $item->save();
        }
        return $item;
     
    }

    public function rimuovi(){
        $carrello=Carrello::where('immagini_id',request('id'));
        $carrello->delete();
    }
    
    public function commenta(){
        $commento=new Commenti;
        $commento->user_id=Session::get('user_id');
        $commento->immagini_id=request('id');
        $commento->commento=request('txt');
        $commento->save();
        return redirect('carrello');
    }
    



}