<!DOCTYPE html>
<html>
    <head>
    <script> const BASE_URL="{{url('/')}}/";</script>
    <script>const token2="{{csrf_token()}}";</script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{'css/ajax.css'}}" rel="stylesheet">
        <link href="{{'css/carrello_modale.css'}}" rel="stylesheet">
        <script src="{{'js/carrello.js'}}" defer="true"></script>
     
        <title></title>
    </head>
    <body> 
        <article> 

            <nav><li class='log'>
            <img class='back' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcv5N1FUJ5hPtErSAxllIQGQ2uqakq9PYxbWquATXT8eHD_dgA6vN_J8IKYX9ypRwcUVc&usqp=CAU">
            <strong><a href="{{url('logout')}}">Logout</a></strong></li>
            </nav>

            <li class='nome'>                
                <section class="utente">
                    <p class='nome'>Ciao {{$nome}}</p><p>{{$data}} </p>
                    <button id='preferiti'>Preferiti</button>
                </section>
            </li> 
            <li class='super'>
                <div class='conteiner'></div>
                <!--<form name='form' method='post'>
                    @csrf
                    <label><input type='text'><input type='submit'></label>
                </form>-->
                
                <div class='conteiner2'>
                 
                </div>
            </li>
        </article>       
    </body>
</html>
