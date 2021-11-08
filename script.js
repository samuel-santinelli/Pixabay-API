"use scrict";

function pesquisarImagens(){
    var imagens=document.getElementById('imagens').value;

         fetch(`https://pixabay.com/api/?key=24137333-2a41ce31f4918e225e2b129a2&q=${imagens}&image_type=photo`).then(function(response){
                        response.json()

                        .then((data) => {
                            console.log(data);
                            var  largeImageURL= data.hits[0].largeImageURL;
                            var img="<img src='"+largeImageURL+"' height=300 width=400/>"

                            document.getElementById('result').innerHTML=img;

                        });
                
                    });

                    const createItem = (largeImageURL) => {
                        const container = document.querySelector("#result")
                        const newLink = document.createElement("a")
                        newLink.href = `#${getId(largeImageURL)}`
                        newLink.classList.add("galery-items")
                        newLink.innerHTML = `<img src="${largeImageURL}" alt=""/>`
                        container.appendChild(newLink)
                    
                    }
            


}