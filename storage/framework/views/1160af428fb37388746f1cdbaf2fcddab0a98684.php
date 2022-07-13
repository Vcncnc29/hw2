<!DOCTYPE html>
<html>
    <head>
    <script> const BASE_URL="<?php echo e(url('/')); ?>/";</script>
    <script>const token2="<?php echo e(csrf_token()); ?>";</script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="<?php echo e('css/ajax.css'); ?>" rel="stylesheet">
        <script src="<?php echo e('js/sito.js'); ?>" defer="true"></script>  
        
     
        <title></title>
    </head>
    <body> 
        <article> 

            <nav><li class='log'>
                <strong><a href="<?php echo e(url('logout')); ?>">Logout</a></strong></li>
                
            </nav>

            <li class='nome'>                
                <section class="utente">
                    <p class='nome'>Ciao <?php echo e($nome); ?></p><p><?php echo e($data); ?> </p>
                    <div class="pulsanti"><button id='preferiti'>Preferiti</button> <button id='carrello'>Carrello</button></div>
                </section>
            </li> 
            <li class='super'>
                <div class='conteiner'>
                    
                </div>
                <div class='conteiner2'></div>
            </li>
        </article>       
    </body>
</html>
<?php /**PATH C:\xampp\htdocs\hw2\resources\views/sito.blade.php ENDPATH**/ ?>