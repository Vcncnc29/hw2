<?php


namespace App\Http\Controllers;
use Session;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\User;
use App\Models\Immagini;
use App\Models\Commenti;
use App\Models\ImmaginiUser;
use App\Models\Carrello;
class Sito extends BaseController{

    public function vista(){
        if(!Session::get('user_id')){
            return redirect('login');
        }
        $date=date("d-m-y");
        $user=User::find(Session::get('user_id'));
        
        return view('sito')->with("nome",$user->nome)->with("data",$date);
    }

   public function add_like(){
    $like=ImmaginiUser::where('user_id',Session::get('user_id'))->where('immagini_id',request('id'))->first();
    if(!$like){
       $like=new ImmaginiUser;
       $like->immagini_id=request('id');
       $like->user_id=Session::get('user_id');
       $like->save();
    }

     return $like;
   }
   public function remove_like(){
    $remove=ImmaginiUser::where('user_id',Session::get('user_id'))->where('immagini_id',request('id'));
    $remove->delete();
   }
    
    public function carica_immagini(){
        $immagini=Immagini::all();       
        return $immagini;
    
    }
    public function list(){
        $image=User::find(Session::get('user_id'))->immaginis()->get();
        return $image;
    }
    public function commenta(){
        $user=User::find(Session::get('user_id'));
        $commento=new Commenti;
        $commento->user_id=Session::get('user_id');
        $commento->immagini_id=request('id');
        $commento->nome_user=$user->nome;
        $commento->commento=request('txt');
        $commento->save();
        return redirect('sito');
    }
    public function commenti_tot(){
       //$comments=User::where('id',request('user_id'))->get();
        $comments=Commenti::where('immagini_id',request('id'))->get();
        //$comments=User::has('commentos')->get();
        return $comments;
    }
  

        
}  