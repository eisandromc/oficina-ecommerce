/* DECLARACOES */
const asideCart = document.querySelector("#cart");

/* FUNCOES */
function agruparCategoriasESubcategorias(produtos) {
  const mapa = {};

  produtos.forEach(produto => {
    const { categoria, subcategoria } = produto;
    if (!mapa[categoria]) {
      mapa[categoria] = new Set();
    }
    mapa[categoria].add(subcategoria);
  });
  const resultado = Object.entries(mapa).map(([categoria, subcategoriasSet]) => ({
    categoria,
    subcategorias: Array.from(subcategoriasSet)
  }));

  return resultado;
}

// adiciona no carrinho
function adicionarAoCarrinho(id) {
  const produto = colecaoProdutos.find(p => p.id === id);

  if (produto) {
    const produtoNoCarrinho = colecaoCarrinho.find(p => p.id === produto.id);
    if (produtoNoCarrinho) {
      produtoNoCarrinho.quantidade += 1;
    } else {
      colecaoCarrinho.push({ ...produto, quantidade: 1 });
    }
  }
  renderizarCarrinho();
  asideCart.classList.add("active");
}
// renderiza os produtos no carrinhO
function renderizarCarrinho() {
  
  const ul = document.querySelector(".cart-items");
  let contadorTotal = 0;

  ul.innerHTML = ""; 
  colecaoCarrinho.forEach(produto => {
  
    const li = document.createElement("li");
    li.setAttribute("data-id", produto.id);
    li.innerHTML = `
      <img src="./img/${produto.foto}" alt="${produto.nome}">
      <div class="cart-info">
        <h3>${produto.nome}</h3>
        <p>Preço: R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
        <p>Quantidade: ${produto.quantidade}</p>
        <button class="btn-remover">Remover</button>
      </div>
    `;
    ul.appendChild(li);
    contadorTotal++;
    
  });
  document.getElementById("quantProduto").textContent = `(${contadorTotal})`;
}


// atualiza o total do carrinho
function atualizarTotalCarrinho() {
  let total = 0;
  
  colecaoCarrinho.forEach(p => {
    total += p.preco * p.quantidade;
  });
  const totalEl = document.querySelector(".total-carrinho");
  totalEl.innerHTML = `<strong>Total:</strong> R$ ${total.toFixed(2).replace('.', ',')}`;
  
}



// renderiza os produtos na tela principal
function renderizarProdutosPrincipal(produtos) {
  const lista = document.getElementById("mainProdutosLista");
  lista.innerHTML = ""; 
  let contador  = 0;

  produtos.forEach(prod => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="./img/${prod.foto}" alt="${prod.nome}">
                    <h3>${prod.nome}</h3>
                    <p>${prod.descricao}</p>
                    <p>R$ ${prod.preco.toFixed(2)}</p>
                    <button onclick="adicionarAoCarrinho('${prod.id}')">Adicionar ao Carrinho</button>`;
    lista.appendChild(li);
    contador++;
  });
  const totalProdutos = document.querySelector("#totalProdutos");
  totalProdutos.innerHTML = `Total de produtos: ${contador}`;
}






/* BOTOES DE ACOES */
// fecha o menu lateral
const btnFechar = document.querySelector("#closeSidebar");
btnFechar.addEventListener("click", () => { 
  asideCart.classList.remove("active"); 
});

// abre o menu lateral/carrinho
const btnAbrir = document.querySelector("#toggleSidebar");
btnAbrir.addEventListener("click", () => { 
  asideCart.classList.toggle("active"); 
});
document.querySelector(".cart-items").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-remover")) {
    const idProduto = e.target.closest("li").dataset.id;
    const index = colecaoCarrinho.findIndex(p => p.id === idProduto);
    if (index !== -1) {
      colecaoCarrinho.splice(index, 1); 
      renderizarCarrinho(); 
    }
  }
});
document.querySelectorAll(".btn-adicionar-carrinho").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const idProduto = e.target.dataset.id;
    adicionarAoCarrinho(idProduto);
  });
});


// lista todos os produtos
const menu = document.querySelector(".menuCategorias");
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();
    const categoria = e.target.dataset.categoria;
    const produtosFiltrados = categoria === "Todos" ? colecaoProdutos : colecaoProdutos.filter(p => p.categoria === categoria);
    renderizarProdutosPrincipal(produtosFiltrados);
  }
});




/* EXECUCOES */
renderizarProdutosPrincipal(colecaoProdutos);



console.log(colecaoCategorias);
