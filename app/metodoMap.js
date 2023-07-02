//aplica o desconto usando o map
function aplicarDesconto(livros) {
//valor do desconto
    const desconto = 0.3
    //coloca dentro da variavel um novo array só que com o preço alterado
    // percorre os arrays de livros
    const livrosComDesconto = livros.map(livro => {
    //retorna um novo array com o preco alterado já com o valor descontado.
        return {...livro, preco:livro.preco - ( livro.preco * desconto)}
})
     return livrosComDesconto
}

//export default aplicarDesconto