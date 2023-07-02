//pega a section que tem a ID -livros-, cria o portal entre o HTML e o JS
const elementoParaInserirLivros = document.getElementById('livros')


//inseri divs com as informacoes contidas no JSON dentro da section -livros-
function exibirOsLivrosNaTela(listaDeLivros){
    
  elementoParaInserirLivros.innerHTML = ''
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

    //export default exibirOsLivrosNaTela