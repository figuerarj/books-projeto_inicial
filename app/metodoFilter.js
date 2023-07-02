
//pega todos os elementos da classe .btn
const botoes = document.querySelectorAll('.btn')
// percorre  a array botoes e ao click ele executa o -filtrarLivros-
botoes.forEach(btn => 
    btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    //pega a informação do botao que esta sendo clicado, no caso pega o ID
    const elementoBtn = document.getElementById(this.id)
    //pega o valor dentro do elementoBtn. Dentro de cada elemento no HTML tem um value já especificado.
    const categoria = elementoBtn.value
    //realiza o filtro usando a categoria do livro
    //atualizacao - se a categoria for disponivel entao: faz filtro com os livros maiores que 0 quantidade se nao faco o filtro com base na categoria. 
    //se for disponivel faz 1 se nao faz 2.
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    //console.table(livrosFiltrados)
    if (categoria == "disponivel"){
        exibirValorTotalDosLivrosDisponiveisNaTela()
    }

    function exibirValorTotalDosLivrosDisponiveisNaTela(){
        elementoComValorTotalDeLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
      </div>`
    }
}


function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}
//export default filtrarLivros

// import exibirOsLivrosNaTela from "./metodoForEach.js"


// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront')
// btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivros)



// function filtrarLivros(){
//     let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end')
//     console.table(livrosFiltrados)
// }



