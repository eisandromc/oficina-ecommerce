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
 
}
// renderiza os produtos no carrinhO
function renderizarCarrinho() {
  
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
