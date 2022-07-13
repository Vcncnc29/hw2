function push(event){
    controllo_conf_password.classList.add('hidden')
    controllo_nome.classList.add('hidden')
    controllo_cognome.classList.add('hidden')
    controllo_indirizzo.classList.add('hidden')
    controllo_email.classList.add('hidden');
    controllo_pass.classList.add('hidden');

}
function invio(event){
    const nome=document.querySelector('.nome1 input');
    if(form.email.value.length==0 || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value )){
        controllo_email.classList.remove('hidden');
        event.preventDefault();
    }
    if(form.cognome.value==0){
        controllo_cognome.classList.remove('hidden')
        event.preventDefault()
    }
    if(form.indirizzo.value==0){
        controllo_indirizzo.classList.remove('hidden')
        event.preventDefault()
    }
    if(form.conf_password.value==0){
        controllo_conf_password.classList.remove('hidden')
        event.preventDefault()
    }
    if(form.password.value.length==0 || !/^[A-Za-z0-9]{8,12}$/.test(password.value)){
        controllo_pass.classList.remove('hidden');
        event.preventDefault();
    }
    if(!/^[a-zA-Z0-9_]{1,15}$/.test(nome.value) || form.nome.value.length==0){
        controllo_nome.classList.remove('hidden')
        event.preventDefault();
    }
    if(form.password.value!== form.conf_password.value){
        controllo_conf_password.classList.remove('hidden');
        event.preventDefault();
    }
    
   
}

const controllo_nome=document.querySelector('.nome_error p')
const controllo_cognome=document.querySelector('.cognome_error p')
const controllo_indirizzo=document.querySelector('.indirizzo_error p')
const controllo_email=document.querySelector('.email_error p');
const controllo_pass=document.querySelector('.password_error p');
const controllo_conf_password=document.querySelector('.conf_password_error p')

controllo_conf_password.classList.add('hidden')
controllo_nome.classList.add('hidden')
controllo_cognome.classList.add('hidden')
controllo_indirizzo.classList.add('hidden')
controllo_email.classList.add('hidden');
controllo_pass.classList.add('hidden');

const form=document.forms['form'];
form.addEventListener('submit',invio);

const click=document.querySelectorAll('input')
for(const i of click){
    i.addEventListener('click',push)
}
