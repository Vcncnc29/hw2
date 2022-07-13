<!DOCTYPE html>
<html>
    <head>
    <script> const BASE_URL="<?php echo e(url('/')); ?>/";</script>
    <script>const token2="<?php echo e(csrf_token()); ?>";</script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="<?php echo e('css/ajax.css'); ?>" rel="stylesheet">
        <script src="<?php echo e('js/ajax.js'); ?>" defer="true"></script>  
     
        <title></title>
    </head>
    <body> 
        <article> 

            <nav><div class='log'>
                <img class='back' src="https://media.istockphoto.com/vectors/returned-vector-icon-vector-id900591912?k=20&m=900591912&s=612x612&w=0&h=Qi9GO89nJJXw8gjHKgXf242fHP3E_7diFuWqCpkM9OE=">
                <strong><a href="<?php echo e(url('logout')); ?>">Logout</a></strong></div>
                <!--<form name='form' class='fform'>
                    <?php echo csrf_field(); ?>
                    <label class='lab'>Cerca altri modelli<input type='text' name='inserisci' class='in'/></label>
                    <input type='submit' value='Cerca' class='subm'>
                </form> -->
            </nav>

            <div class='nome'>                
                <section class="utente">
                    <p>Ciao <?php echo e($nome); ?><br><?php echo e($data); ?> </p>
                    <button>Preferiti</button>
                </section>
            </div> 
            <div class='super'>
                <div class='conteiner'>
                </div></div>
        </article>       
    </body>
</html>
<?php /**PATH C:\xampp\htdocs\hw2duplicato\resources\views/sito.blade.php ENDPATH**/ ?>