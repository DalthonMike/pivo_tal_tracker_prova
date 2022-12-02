var produtos = [
    {
        nome: 'cerveja',
        categoria: 'bebida',
        valor: 7
    },
    {
        nome: 'suco',
        categoria: 'bebida',
        valor: 3
    },
    {
        nome: 'coxinha',
        categoria: 'salgado',
        valor: 4
    },
    {
        nome: 'pastel',
        categoria: 'salgado',
        valor: 5
    }
]

function listar_por_categoria(categoria) {
    let produtosFiltrados = []
    produtosFiltrados = produtos.filter(produto => (produto.categoria === categoria));
    console.log(produtosFiltrados)
    return produtosFiltrados;
}

listar_por_categoria('bebida');

function listar_por_valor(valorMinimo, valorMaximo) {
    let produtosFiltrados = []
    produtosFiltrados = produtos.filter(produto => (produto.valor < valorMaximo && produto.valor > valorMinimo));
    console.log(produtosFiltrados);
    return produtosFiltrados;
}

listar_por_valor(1, 5);
