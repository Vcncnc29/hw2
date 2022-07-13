function cliccato(event){
    controllo_nome.classList.add('hidden')
    controllo_pass.classList.add('hidden')
    
}
function invio(event){
   
   
   
    if(form.password.value.length==0){
        controllo_pass.classList.remove('hidden');
        event.preventDefault();
    }
    if (!/^[a-zA-Z0-9_]{1,15}$/.test(form.nome.value) || form.nome.value.length==0){
        controllo_nome.classList.remove('hidden');
        event.preventDefault();
    }

}

const controllo_nome=document.querySelector('.nome_error p');
const controllo_pass=document.querySelector('.password_error p');


controllo_nome.classList.add('hidden');
controllo_pass.classList.add('hidden');
const form=document.forms['form'];
form.addEventListener('submit',invio);

const input=document.querySelectorAll('.password1 input,.email1 input');
for(const i of input){
    i.addEventListener('click',cliccato);
}

