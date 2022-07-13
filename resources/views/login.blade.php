<!DOCTYPE html>


<html>
    <head>
        <link href="{{('css/css2.css')}}" rel="stylesheet">
       <script src="{{'js/login.js'}}" defer='true'></script>
       <title></title>
    </head>
    <body>
        <main>
            <article>
                @if($errore=='errati')
                <section class='error'>Nome o password errati</section>
                @endif
            <section>
                <div class="conteiner"><h1>Inserisci Nome e Password</h1>
                <form name='form' method='post'>
                    @csrf
                    <div class='nome1'>
                        <label>NOME<input type='text' name='nome' value="{{old('nome')}}"></label><div class='nome_error'><p>Nome non valido</p></div>
                    </div>
                    <div class='password1'>
                        <label>PASSWORD<input type='password' name='password'></label><div class="password_error"><p>password non inserita</p></div>
                    </div>
                 
                    <div class='registrazione'><p>Non hai un account?</p><a href="{{ url('registrati') }}">Registrati</a></div>
                    <div class="i"><label><input type='submit' value='Accedi' id="invia"></label>
                    </div>
                </form>
                </div>
            </section>
            </article>
        </main>
    </body>

</html>