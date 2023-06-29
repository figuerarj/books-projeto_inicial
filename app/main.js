//array vazia que ira receber o json
let livros = []
// link para realizar o fetch
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
// executa a funcao que faz a requisição do JSON.
getBuscarLivrosDaAPI()
//pega a section que tem a ID -livros-, cria o portal entre o HTML e o JS
const elementoParaInserirLivros = document.getElementById('livros')

//essa função recebe o json com os dados dos livros
//async - irá realizar a espera por uma promessa. carregar toda a lista antes de executar o js
// await - resposta - espere por uma promessa - fetch(endpointAPI)
// pega a resposta e atribui em livros
async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointAPI)
    // livros vai receber a lista de livro que recebeu no -res- quando fez a requisção pelo endpointAPI
    livros = await res.json()
    console.log(livros)
    //exibe os livros com os dados recebidos do Json, já populando a section -livros- 
    exibirOsLivrosNaTela(livros)
}

//inseri divs com as informacoes contidas no JSON dentro da section -livros-
function exibirOsLivrosNaTela(listaDeLivros){
    //percorre cada array da varivel -livros- buscando os dados 
    //depois que tiver os dados ele monta a div para ser inserida dentro da section -livros-
    listaDeLivros.forEach(livro => {
        //inseri dentro da section -livros- todas as arrays que ele percorrer
        elementoParaInserirLivros.innerHTML += 
        //essa é a estrutura que ele irá montar e enviar para a section -livros-
        // -livro- é o indice do array.
        `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
        
      </div>
        `
    });
}