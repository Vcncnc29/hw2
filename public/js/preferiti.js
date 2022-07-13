
fetch(BASE_URL+"sito_cerca").then(onresponse).then(incolla)
const conteiner2=document.querySelector('.conteiner2')
const log=document.querySelector('.log')
log.classList.remove('log')
log.classList.add('log2')
    

function incolla(json){
    console.log(json)
    
       conteiner2.innerHTML=''
       
    for(const image of json){
       const section=document.createElement('section')
       const im=document.createElement('img')

       const div_item4=document.createElement('div')
        div_item4.classList.add('separa')

        const carrello=document.createElement('img')
        carrello.dataset.id=image.id
        carrello.src="https://us.123rf.com/450wm/val2014/val20141603/val2014160300006/54302308-icona-del-carrello.jpg?ver=6" 
        carrello.classList.add('carrello')
        carrello.addEventListener('click',aggiungi_al_carrello)
       im.src=image.url_
       im.dataset.id=image.id
      
       section.dataset.id=image.id
       console.log('id='+im.id)
       const cuore=document.createElement('img')
       cuore.dataset.id=image.id
       console.log(cuore.dataset.id)
       cuore.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRl5DcMyu21aKsvwO4lhtSXlncK-p3RCbo9OSoA8ze9zi6RF5eQNOnMqRdxkwIVWRXG6A&usqp=CAU"
       cuore.classList.add('cuore')
       
       cuore.addEventListener('click',elimina)
       section.classList.add('uno2')
      section.appendChild(im)
       div_item4.appendChild(cuore) 
        div_item4.appendChild(carrello)
        section.appendChild(div_item4)
       conteiner2.appendChild(section)
       

    }
    carica();
}
function aggiungi_al_carrello(event){
        const c=event.currentTarget
        console.log(c)        
        //const div=document.querySelector('[data-id="'+c.dataset.id+'"]')
        if(c.src=="https://us.123rf.com/450wm/val2014/val20141603/val2014160300006/54302308-icona-del-carrello.jpg?ver=6"){
            c.src="https://media.istockphoto.com/vectors/shopping-cart-vector-id866510458"
        
            const formData=new FormData()
        
            formData.append("id",c.dataset.id)
            formData.append('_token',token2)
            console.log(c.dataset.id)
            fetch(BASE_URL+"selezionato", {
            method: "post",
        
            body:formData
            }).then(onresponse2)
        }
    else{
        rimuovi_dal_carrello(event)
    }
}
//rimuovi dal carrello
function rimuovi_dal_carrello(event){
    const c=event.currentTarget
    c.src="https://us.123rf.com/450wm/val2014/val20141603/val2014160300006/54302308-icona-del-carrello.jpg?ver=6"
    const formData=new FormData()
      
    formData.append("id",c.dataset.id)
    formData.append('_token',token2)
    fetch(BASE_URL+'remove',{
        method:'post',
        body:formData
    }).then(onresponse2)

}
function elimina(event){
        const c=event.currentTarget
        console.log(c)
       
        const div=document.querySelector('[data-id="'+c.dataset.id+'"]')     
        div.remove()

        const formData=new FormData()
    
        formData.append("id",c.dataset.id)
        formData.append('_token',token2)
        console.log(c.dataset.id)
         fetch(BASE_URL+"sito2", {
         method: "post",
     
         body:formData
     }).then(onresponse2)
     
}
    
function onresponse(response){
    console.log(response)
    return response.json()

}

function onresponse2(response){
    console.log(response)
    return response.text();
}
//vai a sito
const back=document.querySelector('.back')
back.addEventListener('click',pag_iniziale)
function pag_iniziale(){
    window.location.assign(BASE_URL+'sito')
}


//vai a carrello
const carrello=document.querySelector('#carrello')
carrello.addEventListener('click',list)

function list(event){
    
    window.location.assign(BASE_URL+"carrello")
    
}


//confronta con il carrello

function carica(){
    fetch(BASE_URL+'lista_carrello').then(onresponse).then(confronta)
}
    
    
function confronta(json){
        console.log(json)
        const item=document.querySelectorAll('.carrello')
        const res=json
        for(const j of item){
            j.src="https://us.123rf.com/450wm/val2014/val20141603/val2014160300006/54302308-icona-del-carrello.jpg?ver=6" 
          }
        for(const i of res){
            console.log(i.id)
            for(const j of item){
            console.log(j.dataset.id)
            if(j.dataset.id==i.id){
                j.src="https://media.istockphoto.com/vectors/shopping-cart-vector-id866510458"
                
            }
            }
        }
}



