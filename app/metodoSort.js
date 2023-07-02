//pega o ID do botao por preco
let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
//cria o evento que executa ao click do botao por preco , a funcao ordenarLivrosPorPreco.
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

// essa funcao usa o sort para organizar o array e retornar um valor ordenado.
function ordenarLivrosPorPreco(){
    //faz o sort usando como base a array de livros.
    //dentro da arrow function - ele pede dois parametros A e B
    //usando o valor dentro de a.preco e b.preco é possivel ordenar os precos.
    let livrosOrdenados = livros.sort((a,b)=> a.preco - b.preco)
    //usando a funcao exibirOsLivrosNaTela com paramentro livrosOrdenados, ele pega a array já ordenada e lança na tela.
    exibirOsLivrosNaTela(livrosOrdenados)
}