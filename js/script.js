// https://picsum.photos/200/300  >>>> lorem de imagem para html imagens aleatorias

const API_KEY = "0b26548ed81a44208b55177987ae7e60";

let config = {
    method: "GET"
}
let corpo = document.querySelector('#corpoCard')
let btnNoticia = document.querySelector('#botaoC')



function mostrarNaTela(listaNoticias){

    listaNoticias.forEach((noticia) => {
        
        let cardNovo =
            `<div class="col-md-3 mb-4 ml-2">
                <div class="card" style="width: 18rem;">
                    <img src="${noticia.urlToImage}" class="card-img-top" alt="${noticia.author}" title="${noticia.author}">
                        <div class="card-body">
                            <h5 class="card-title">${noticia.title}</h5>
                            <p class="card-text">${noticia.description}</p>
                            <a href="${noticia.url}" target="_blank" class="btn btn-primary">Ver mais</a>
                        </div>
                </div>
            </div>`

        corpo.insertAdjacentHTML('beforeend', cardNovo)
    });

}

btnNoticia.onclick = () => {
    let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + API_KEY, config)
    .then((resposta) => {
        return resposta.json();

    })
    .then((json) => {
        // console.log(json.articles[0]);
        mostrarNaTela(json.articles)
    })
}

