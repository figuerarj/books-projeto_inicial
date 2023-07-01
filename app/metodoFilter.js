
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
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria )
    exibirOsLivrosNaTela(livrosFiltrados)
    //console.table(livrosFiltrados)
}

//export default filtrarLivros

// import exibirOsLivrosNaTela from "./metodoForEach.js"


// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront')
// btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivros)



// function filtrarLivros(){
//     let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end')
//     console.table(livrosFiltrados)
// }



