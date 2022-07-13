<?php


namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\User;
use Session;
class Registrazione extends BaseController{

    public function vista(){
        if(Session::get('user_id')){
            return redirect('sito');
        }
        $errore=Session::get("errore");
        Session::forget('errore');
        return view('registrazione')->with("errore",$errore);
    }



    public function check(){   
            $request=request(); //legge i dati post
            if(!preg_match('/^[a-zA-Z0-9_]{1,15}$/',$request['nome'])){
                Session::put("errore","nome_er");
               return redirect('registrati')->withInput();
                
                
              
            }
            else{
                $nome=User:: where('nome',$request['nome'])->first();
                if($nome!=null){
                    Session::put("errore","nome_invalid");
                    return redirect('registrati')->withInput();
                  
                   
                }
            
            }
            if(strlen($request['password'])<8){
                Session::put("errore","password_er");
                return redirect('registrati')->withInput();;
            }
            if($request['password']!==$request['conf_password']){
                Session::put("errore","conf_password_er");
                return redirect('registrati')->withInput();;
            }
            if(!filter_var($request['email'],FILTER_VALIDATE_EMAIL)){
                Session::put("errore","email_er");
                return redirect('registrati')->withInput();
            }
            else{
                $email=User::where('email',$request['email'])->first();
                if($email!=null){
                    Session::put("errore","email_invalid");
                    return redirect('registrati')->withInput();
                }

               
            }
            
           $utente=new User;
           $utente->nome=request('nome');
           $utente->cognome=request('cognome');
           $utente->email=request('email');
           $utente->indirizzo=request('indirizzo');
           $utente->password=password_hash(request('password'),PASSWORD_BCRYPT);
           $utente->save();
        
        Session::put('user_id',$utente->id);
       
        return redirect('login');
       
    
    }
}
