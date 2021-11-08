'use strict';

    const limparElementos = (elemento) => {
        while(elemento.firstChild){
            elemento.removeChild(elemento.lastChild);
        }
    }


const insertNamePicture  = async (evento) =>{
    if(evento.key == "Enter" || evento.type == "click"){ 
    const imagems = document.getElementById('pesquisaImagens').value;
    const url = `https://pixabay.com/api/?key=24136613-919a2d4521b496eb21144bbaa&q=${imagems}&image_type=photo`;
    const dados = await fetch(url);
    const fotos = await dados.json(); 

    limparElementos(document.querySelector('.galery-container'))
   
   carregarImagens(fotos.hits);
    
 }
   
   
}


const uploadPictures = (item) => {
    const img = document.querySelector('.galery-container');
    const div = document.createElement('div')
    div.classList.add('picture')
    div.innerHTML = `
    <div class="imgPicture"> 
    <img id="Picture" src="${item.previewURL}">
    <div class="imgPicture">
    <div class="typeDesc">${item.tags}</div>
    <div class="typeDesc">${item.likes} likes <img  class="icon-right" src="imagens/like.png"></div>
    <div class="typeDesc">${item.comments} comments <img  class="icon-right" src="imagens/comment.png"></div>
</div>
 `

    
img.appendChild(div);
}


const carregarImagens = (imagem) => imagem.forEach(uploadPictures) 




document.getElementById('pesquisaImagens').addEventListener('keypress' ,insertNamePicture);

document.querySelector('.material-icons').onclick = insertNamePicture


