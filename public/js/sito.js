
function onjson(json){
    
    console.log(json)
   const div_conteiner=document.querySelector('.conteiner')   
    const res=json
    
   for(imag_ of res){
       div_conteiner.appendChild(create_item(imag_))
   }
   clicca()
}
function create_item(item){    
    const div_item=document.createElement('div')
    div_item.classList.add('uno')
    div_item.dataset.id=item.id

    /*const div_commenti=document.createElement('div')
    div_commenti.classList.add('div_commenti') 
    div_commenti.dataset.id="id_commenti"+item.id*/

   const div_item2=document.createElement('div')
   div_item2.classList.add('separa')
    const cuore=document.createElement('img')
    cuore.src="https://emojigraph.org/media/emojipedia/white-heart_1f90d.png"
    cuore.classList.add('cuore')
    cuore.dataset.id=item.id    
    cuore.addEventListener('click',cuore2)
    
    const carrello=document.createElement('img')
    carrello.dataset.id=item.id
    carrello.src="https://us.123rf.com/450wm/val2014/val20141603/val2014160300006/54302308-icona-del-carrello.jpg?ver=6"
    carrello.addEventListener('click',aggiungi)
    carrello.classList.add('carrello')
    const images2=document.createElement('img')
    images2.src=item.url_
    images2.dataset.id=item.id

//form
    const form=document.createElement('form')
    form.classList.remove('hidden')
    form.name='form'
    form.method='post'
    form.dataset.id='form_id'+item.id
    
    const token=document.createElement('input')
    token.name='_token'
    token.type='hidden'
    token.value=token2

    const id=document.createElement('input')
    id.type='hidden'
    id.value=''+images2.dataset.id
    id.name='id'

    const input=document.createElement('input')
    input.type='text'
    input.name='txt'
    input.id='testo'
    input.placeholder='Aggiungi un commento'
    input.classList.add('allunga_input')

    const commenta=document.createElement('input')
    commenta.type='submit'
    commenta.value='commenta'
    commenta.classList.add('pulsante')
   
    const visualizza_commenti=document.createElement('span')
    visualizza_commenti.textContent='Visualizza commenti'
    visualizza_commenti.classList.add('misura_span')
    visualizza_commenti.dataset.id=item.id
    visualizza_commenti.addEventListener('click',_lista_commenti)

   
    const label_txt=document.createElement('label')
    const div_pulsante=document.createElement('div')
    div_pulsante.classList.add('classe_label')
    label_txt.appendChild(input)   
    div_pulsante.appendChild(visualizza_commenti)
    div_pulsante.appendChild(commenta)

    form.appendChild(id)
    form.appendChild(token)
    form.appendChild(label_txt)
    form.appendChild(div_pulsante)
    



    div_item.appendChild(images2)
    div_item2.appendChild(cuore)  
    div_item2.appendChild(carrello)
    div_item.appendChild(div_item2)
    div_item.appendChild(form)
    //div_item.appendChild(div_commenti)
    conteiner.appendChild(div_item)
    

    return div_item

}

function _lista_commenti(event){
    console.log('cliccato')

    const c=event.currentTarget
    //c.removeEventListener('click',_lista_commenti)
    const formData=new FormData()
    formData.append('id',c.dataset.id)
    
    formData.append('_token',token2)
    fetch(BASE_URL+'commenti',{
        method:'post',
        body:formData
    }).then(onresponse).then(_visualizza_commenti_)
    
}


function _visualizza_commenti_(json){
    console.log(json)
    if(json.length!=0){
    const div=document.querySelector('[data-id="'+json[0].immagini_id+'"]')
    const div_commenti=document.createElement('div')
    //const div_commenti=document.querySelector('[data-id="id_commenti'+json[0].immagini_id+'"]')
   
    div_commenti.classList.add('div_commenti') 
    div_commenti.innerHTML='' 
    for(const res of json){  
        const nome=document.createElement('span')
        nome.textContent=res.nome_user+': '
        const p=document.createElement('span')
        p.innerHTML=''
        div_commenti.dataset.id="id_commenti"+res.immagini_id
        const br=document.createElement('br')
        //div_commenti.classList.add('hidden')
        console.log(res.immagini_id)
        
        p.textContent=res.commento
        p.classList.add('misura_p')
        div_commenti.appendChild(nome)
        div_commenti.appendChild(p)
        div_commenti.appendChild(br)
        div.appendChild(div_commenti)
    }
    //chiudi   
    const div_x=document.createElement('div')
    
    div_x.classList.add('div_x')
    const div_contenente_x=document.createElement('div')
    div_contenente_x.innerHTML=''
    div_contenente_x.classList.add('div_contenente_x')

   const x=document.createElement('img')
   x.dataset.id="id_commenti"+json[0].immagini_id
    x.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX///8AAABbW1teXl5YWFhPT09UVFRVVVXq6upOTk7BwcGRkZHu7u4dHR3e3t49PT2Xl5fIyMhkZGQKCgpPrCJfAAADp0lEQVR4nO2dCXqjMAyFQ7plsraZ+991SvncCcECA5Ijvbz/ADxsSZYMXjYbQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEkMdz3FUW3B1rqu23zTenQ61W7g6nVnC7r6R3vjSJzyqCn796l3MNva/mhmsFweut4Je93rnp8WouuO0L2lvx0hds3oz13u70LsZ6m31zj60VXwd61sPNdqDYbA3lXurKtQwVm+bDTG1owW/M1H445iTNYvE9q2ab+ndZTSPPybhoi3GdkRc1aaLQQGMv3ZwEWX1HvU8TiZO6Up+DoKs+3GQHmZaDstA9QiA22o4quah5GN6Wwfdopn7RgjWK/asorheLUgzWKfVzZY2yFe0VJsgn4hadWJRj0LrM/0Xu43eFp8sxWMmCLZa9bO0hhcj9vPY15M6zK/CzyD29zpUcxOD0q/xZ8VQnLtph4U52zr8I/f525KIdco8vs6KchCoPMv/RjUVXMZjQLK8eXqrl0et3dzGYkHt+3ot9+LRgi9z3c2pUuYEPjMGERg7T6SYz1juYlqubsTZpuEwTfeQmllhRtqCbBq6zgts00Wd5Aadd+pmxNBYDxGBiWTSti+DKLLFGkBhMzH9dq08hZsytTJzN6EuYV106L9XyzCngbD8rm1Eei4HSRJ/SmbrTGX0JZbYJlib6lMSXi58vy5m2T9gYTEzlOTc/X5YzXquEjsHEWCPCu2iH3ESZUA0cc1TZusGQh5s8rku1PPMcNZiLdsipf0iIRD+kPBbDxWCi1IpBLdhSFoshYzBRMqIGHEVvmY7FsDGYmHLU0C7aMd5EgAaOO2p4F+34K7fw0a+mA7wNx+MwcLJPwI+l8PkQvqaBr0vh5xbw80P4OT78dxr4b23w30vhv3nD/7cYb4TNbpuqwP8/hP8HDP8ff+1aDPexCL+eBn5NFPy6Nq21iW4LOPj1pfN3vgRbI6y7ztth0tBeq++ugFs6bIRJGvB7Zmz2PTmKRau9a25G1LWp230srs9qzveQwu8Dht/LrTVDcLsfH/5MBc2B3uVmS91+d5g0tL+YuZv1w58xBH9OlE1/O4pFq1dx46jwZ+5Z9rSLAg7+7Ev480vhz6CFP0e4zlnQshXNz4LGP88b/0z2eufqSyO29bn6gizO3Qj491vg31GCf8/ME9wVVPu+p2GPml8vB39n1xPcu4Z/d94T3H+4wb/D8gfwe0gJIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCBP4BAyMhUrpvY7EAAAAASUVORK5CYII="
    x.classList.add('dimension_x')
    x.addEventListener('click',chiudi)
    div_x.appendChild(x)
    div_contenente_x.appendChild(div_x)
    div.appendChild(div_contenente_x)
   
    }
    
    
}


function chiudi(event){
    const c=event.currentTarget 
    const div_x=document.querySelector('[data-id="'+c.dataset.id+'"]')
    //div_x.classList.add('hidden')
    div_x.remove()
    elimina_div(event)
}

function elimina_div(event){
    const c=event.currentTarget
    const div_commenti=document.querySelectorAll('[data-id="'+c.dataset.id+'"]')
    for(const i of div_commenti){
        //i.classList.add('hidden')
        i.remove()
    }

}

function q(event){
    const a=event.currentTarget
    console.log(a.dataset.id)
     a.src="https://emojigraph.org/media/emojipedia/white-heart_1f90d.png"
    
     const formData=new FormData()
      
     formData.append("id",a.dataset.id)
     formData.append('_token',token2)

      fetch(BASE_URL+"sito2", {
      method: "post",
  
      body:formData
  }).then(onresponse2)

   
    
}

function cuore2(event){
    const c=event.currentTarget
     
    if(c.src=="https://emojigraph.org/media/emojipedia/white-heart_1f90d.png"){
        c.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRl5DcMyu21aKsvwO4lhtSXlncK-p3RCbo9OSoA8ze9zi6RF5eQNOnMqRdxkwIVWRXG6A&usqp=CAU"

       
       const formData=new FormData()
      
       formData.append("id",c.dataset.id)
       formData.append('_token',token2)

        fetch(BASE_URL+"sito4", {
        method: "post",
    
        body:formData
    }).then(onresponse2).then(json1)
    function json1(json){
        console.log('insert')
    }

    
}
else{
    q(event)
}
    

    
}
function onresponse2(response){
    console.log(response)
    return response.text();
}
function onresponse(response){
    console.log(response)
    return response.json()

}



const log=document.querySelector('.log')

const conteiner=document.querySelector('.conteiner')
const super_=document.querySelector('.super')
const conteiner2=document.querySelector('.conteiner2')

//carica immagini
fetch(BASE_URL + 'lista').then(onresponse).then(onjson);



//preferiti
const preferiti=document.querySelector('#preferiti')
preferiti.addEventListener('click',list)

function list(event){
    
    window.location.assign(BASE_URL+"preferiti")
    
}

//confronta immagini(con i preferiti) 
function clicca(event){
        
   fetch(BASE_URL+"sito_cerca").then(onresponse).then(onreturn)

       
}
function onreturn(json){
      const conteiner=document.querySelector('.conteiner')
      const div_uno=document.querySelectorAll('.cuore')
      for(const j of div_uno){
        j.src="https://emojigraph.org/media/emojipedia/white-heart_1f90d.png"
      }
      
     for(const res of json){
        
        for(const i of div_uno){
            if(i.dataset.id==res.id){
            i.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRl5DcMyu21aKsvwO4lhtSXlncK-p3RCbo9OSoA8ze9zi6RF5eQNOnMqRdxkwIVWRXG6A&usqp=CAU"

            }
        
        }
     }
     carica()
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
          
            for(const j of item){
 
            if(j.dataset.id==i.id){
                j.src="https://media.istockphoto.com/vectors/shopping-cart-vector-id866510458"
                
            }
            }
        }
        
}




//aggiungi al carrello
function aggiungi(event){
    const c=event.currentTarget
    console.log(c.id)
    if(c.src=="https://us.123rf.com/450wm/val2014/val20141603/val2014160300006/54302308-icona-del-carrello.jpg?ver=6"){
    c.src="https://media.istockphoto.com/vectors/shopping-cart-vector-id866510458"
    const formData=new FormData()
    formData.append("id",c.dataset.id)
    formData.append('_token',token2)
    fetch(BASE_URL+'selezionato',{
        method:'post',
        body:formData
    }).then(onresponse)
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

//carrello
const carrello=document.querySelector('#carrello')
carrello.addEventListener('click',inserisci_carrello)


function inserisci_carrello(event){
    window.location.assign(BASE_URL+'carrello')
}