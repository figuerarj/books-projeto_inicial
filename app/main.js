

//array vazia que ira receber o json
let livros = []
// link para realizar o fetch
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
// executa a funcao que faz a requisição do JSON.
getBuscarLivrosDaAPI()

// const botoes = document.querySelectorAll('.btn')
// botoes.forEach(btn => btn.addEventListener('click', () => filtrarLivros(btn.id) ))
//essa função recebe o json com os dados dos livros
//async - irá realizar a espera por uma promessa. carregar toda a lista antes de executar o js
// await - resposta - espere por uma promessa - fetch(endpointAPI)
// pega a resposta e atribui em livros
async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointAPI)
    // livros vai receber a lista de livro que recebeu no -res- quando fez a requisção pelo endpointAPI
    livros = await res.json()
    //variavel recebe o valor da funcao que aplicou o desconto nos livros.
    let livrosComDesconto = aplicarDesconto(livros)
    //exibe os livros com os dados recebidos do Json, já populando a section -livros- 
    //agora ele já nao mostra os livros, agora ele mostra a variavel que tem os livros com desconto.
    exibirOsLivrosNaTela(livrosComDesconto)
}


