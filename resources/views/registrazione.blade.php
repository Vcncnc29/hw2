<!DOCTYPE html>
<html>
    <head>
        <link href="{{'css/css2.css'}}" rel="stylesheet">
        <script src="{{'js/regis.js'}}" defer="true"></script>
        <title>
          
        </title>
    </head>
    <body>
        <main>
            <article>
            <section>
                @if($errore=='nome_er')
                <section class='error'>Nome errato</section>
                @elseif($errore=='nome_invalid')
                <section class='error'>Nome già presente</section>
                @elseif($errore=='email_er')
                <section class='error'>Email errata</section>
                @elseif($errore=='email_invalid')
                <section class='error'>Email già presente</section>
                @elseif($errore=='password_er')
                <section class='error'>La Password deve essere lunga 8 caratteri</section>
                @elseif($errore=='conf_password_er')
                <section class='error'>Le Password non coincidono</section>
                @endif
                
                    <div class="conteiner"><h1>Inserisci i tuoi dati</h1>
                        <form name='form' method='post' id="a">
                            @csrf
                            <div class="nome1">
                                <label>NOME<input type='text' name='nome' value="{{old('nome')}}"></label><div class='nome_error'><p>nome non valido</p></div>
                            </div>
                            <div class="cognome1">
                                <label>COGNOME<input type='text' name='cognome' value="{{old('cognome')}}"></label><div class='cognome_error'><p>cognome non valido</p></div>
                            </div>
                            <div class="email1">
                                <label>EMAIL<input type='text' name='email' value="{{old('email')}}"></label><div class='email_error'><p>email non valida</p></div>
                            </div>
                            <div class="indirizzo1">
                                <label>INDIRIZZO<input type='text' name='indirizzo' value="{{old('indirizzo')}}"></label><div class='indirizzo_error'><p>indirizzo non valido</p></div>
                            </div>
                            <div class="password1">
                                <label>PASSWORD<input type='password' name='password'></label><div class='password_error'><p>la password deve contenere almeno 8 caratteri</p></div>
                            </div>
                            <div class="conf_password1">
                                <label>CONFERMA PASSWORD<input type='password' name='conf_password'></label><div class='conf_password_error'><p>la password non coincide</p></div>
                            </div>
                 
                            <div class='login'><p>Hai già un account? Effettua l'accesso</p> <a href="{{url('login')}}">clicca qui</a></div>
                            <div class="i">
                                <label><input type='submit' value='Registrati' id="invia"></label>
                            </div>
                        </form>
                    </div>
            </section>
        </article>
        </main>
    </body> 
</html>    
