

fetch(BASE_URL+'lista_carrello').then(onresponse).then(incolla)
const conteiner2=document.querySelector('.conteiner2')

function onresponse(response){
    console.log(response)
    return response.json()
}
function onresponse2(response){
    console.log(response)
    return response.text()
}

function onjson(json){
    console.log(json)
    
}


function incolla(json){
    console.log(json)
    
       conteiner2.innerHTML=''
       
    for(const image of json){
       const section=document.createElement('section')
       const im=document.createElement('img')

       const div_item4=document.createElement('div')
        div_item4.classList.add('separa')

        const rimuovi=document.createElement('span')
        rimuovi.textContent='Rimuovi'
        rimuovi.dataset.id=image.id
        rimuovi.classList.add('rimuovi')
        rimuovi.addEventListener('click',elimina)   

       im.src=image.url_
       im.dataset.id=image.id
       im.classList.add('image')
       //im.addEventListener('click',open_image)
      
       section.dataset.id=image.id
       console.log('id='+im.id)
       const cuore=document.createElement('img')
       cuore.dataset.id=image.id
       console.log(cuore.dataset.id)
       cuore.src="https://emojigraph.org/media/emojipedia/white-heart_1f90d.png"
       cuore.classList.add('cuore')
       
      
       cuore.addEventListener('click',cuore2)
       section.classList.add('uno2')
      section.appendChild(im)
       div_item4.appendChild(cuore) 
        div_item4.appendChild(rimuovi)
  
        section.appendChild(div_item4)
       conteiner2.appendChild(section)
       
     
      
    }
    carica()

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
         fetch(BASE_URL+"remove", {
         method: "post",
     
         body:formData
     }).then(onresponse2)
     
    
    
}



const preferiti=document.querySelector('#preferiti')
preferiti.addEventListener('click',list)

function list(event){
    
    window.location.assign(BASE_URL+"preferiti")
    
}

//confronta con i preferiti
function carica(){
fetch(BASE_URL+'sito_cerca').then(onresponse).then(confronta)
}


function confronta(json){
    console.log(json)
    const item=document.querySelectorAll('.cuore')
    const res=json
    for(const j of item){
        j.src="https://emojigraph.org/media/emojipedia/white-heart_1f90d.png"
      }
    for(const i of res){
        console.log(i.id)
        for(const j of item){
        console.log(j.dataset.id)
        if(j.dataset.id==i.id){
            j.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRl5DcMyu21aKsvwO4lhtSXlncK-p3RCbo9OSoA8ze9zi6RF5eQNOnMqRdxkwIVWRXG6A&usqp=CAU"
            
        }
        }
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
    

    
}
else{
    q(event)
}
    

    
}
function json1(json){
    console.log('insert')
}
const log=document.querySelector('.log')
log.classList.remove('log')
log.classList.add('log2')
//vai a sito
const back=document.querySelector('.back')
back.addEventListener('click',pag_iniziale)
function pag_iniziale(){
    window.location.assign(BASE_URL+'sito')
}

const conteiner2_modale=document.querySelector('.conteiner2')
const nav=document.querySelector('nav')


//clicca image
function open_image(event){
    conteiner2_modale.innerHTML=''
    nav.innerHTML=''
    console.log('ci')
    const c=event.currentTarget
   

    
    const div=document.createElement('div')
    const section=document.createElement('section')
    const im=document.createElement('img')
    im.src=c.src
    im.dataset.id=c.dataset.id
    im.classList.add('ingrandisci')
    conteiner2_modale.classList.add('modale')
    section.appendChild(im)
    section.classList.add('modale')
    console.log(im)
    div.appendChild(section)
    conteiner2_modale.appendChild(div)
    //commenti
    const form=document.createElement('form')
    form.classList.remove('hidden')
    form.name='form'
    form.method='post'
    
    const token=document.createElement('input')
    token.name='_token'
    token.type='hidden'
    token.value=token2
    const id=document.createElement('input')
    id.type='hidden'
    id.value=''+c.dataset.id
    id.name='id'
    const input=document.createElement('input')
    input.type='text'
    input.name='txt'
    input.id='testo'

    const commenta=document.createElement('input')
    commenta.type='submit'
    commenta.value='commenta'
   
    
    const label=document.createElement('label')
    label.classList.add('allunga_label')
    div.appendChild(section)
    
    
    label.appendChild(input)
    label.appendChild(commenta)
    
    form.appendChild(id)
    form.appendChild(token)
    form.appendChild(label)
    section.appendChild(form)
   





    //return
    const div_x=document.createElement('div')
    div_x.classList.add('div_x')
   const x=document.createElement('img')
    x.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX///8AAABbW1teXl5YWFhPT09UVFRVVVXq6upOTk7BwcGRkZHu7u4dHR3e3t49PT2Xl5fIyMhkZGQKCgpPrCJfAAADp0lEQVR4nO2dCXqjMAyFQ7plsraZ+991SvncCcECA5Ijvbz/ADxsSZYMXjYbQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEkMdz3FUW3B1rqu23zTenQ61W7g6nVnC7r6R3vjSJzyqCn796l3MNva/mhmsFweut4Je93rnp8WouuO0L2lvx0hds3oz13u70LsZ6m31zj60VXwd61sPNdqDYbA3lXurKtQwVm+bDTG1owW/M1H445iTNYvE9q2ab+ndZTSPPybhoi3GdkRc1aaLQQGMv3ZwEWX1HvU8TiZO6Up+DoKs+3GQHmZaDstA9QiA22o4quah5GN6Wwfdopn7RgjWK/asorheLUgzWKfVzZY2yFe0VJsgn4hadWJRj0LrM/0Xu43eFp8sxWMmCLZa9bO0hhcj9vPY15M6zK/CzyD29zpUcxOD0q/xZ8VQnLtph4U52zr8I/f525KIdco8vs6KchCoPMv/RjUVXMZjQLK8eXqrl0et3dzGYkHt+3ot9+LRgi9z3c2pUuYEPjMGERg7T6SYz1juYlqubsTZpuEwTfeQmllhRtqCbBq6zgts00Wd5Aadd+pmxNBYDxGBiWTSti+DKLLFGkBhMzH9dq08hZsytTJzN6EuYV106L9XyzCngbD8rm1Eei4HSRJ/SmbrTGX0JZbYJlib6lMSXi58vy5m2T9gYTEzlOTc/X5YzXquEjsHEWCPCu2iH3ESZUA0cc1TZusGQh5s8rku1PPMcNZiLdsipf0iIRD+kPBbDxWCi1IpBLdhSFoshYzBRMqIGHEVvmY7FsDGYmHLU0C7aMd5EgAaOO2p4F+34K7fw0a+mA7wNx+MwcLJPwI+l8PkQvqaBr0vh5xbw80P4OT78dxr4b23w30vhv3nD/7cYb4TNbpuqwP8/hP8HDP8ff+1aDPexCL+eBn5NFPy6Nq21iW4LOPj1pfN3vgRbI6y7ztth0tBeq++ugFs6bIRJGvB7Zmz2PTmKRau9a25G1LWp230srs9qzveQwu8Dht/LrTVDcLsfH/5MBc2B3uVmS91+d5g0tL+YuZv1w58xBH9OlE1/O4pFq1dx46jwZ+5Z9rSLAg7+7Ev480vhz6CFP0e4zlnQshXNz4LGP88b/0z2eufqSyO29bn6gizO3Qj491vg31GCf8/ME9wVVPu+p2GPml8vB39n1xPcu4Z/d94T3H+4wb/D8gfwe0gJIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCBP4BAyMhUrpvY7EAAAAASUVORK5CYII="
    x.classList.add('dimension_x')
    x.addEventListener('click',chiudi)
    div_x.appendChild(x)
    nav.appendChild(div_x)

}

function chiudi(){
    window.location.assign(BASE_URL+'carrello')
}

