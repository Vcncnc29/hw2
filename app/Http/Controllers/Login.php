<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\User;
use Session;
class Login extends BaseController {

    public function vista(){
        if(Session::get('user_id')){
            return redirect('sito');
        }
        $errore=Session::get("errore");
        Session::forget('errore');
        return view('login')->with("errore",$errore);
    }
    public function check(){
        $request=request();
       
        if(strlen($request["password"])!==0 && strlen($request['nome'])!==0){
           $user=User:: where('nome',$request['nome'])->first();
            if($user!==null && password_verify(request('password'),$user->password)){
                Session::put('user_id',$user->id);
                Session::put('nome',$user->nome);
               
                return redirect('sito')->with("nome",request('nome'));
                
            }else{
                Session::put("errore","errati");               
                return redirect('login')->withInput();
            }
        } 
       
        
    } public function logout(){
        
        Session::flush();
        return redirect('login');
    }
    
    
}

