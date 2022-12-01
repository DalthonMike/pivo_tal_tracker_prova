var produtos = [
    {
        nome: 'cerveja',
        categoria: 'bebida'
    },
    {
        nome: 'suco',
        categoria: 'bebida'
    },
    {
        nome: 'joelho',
        categoria: 'salgado'
    },
    {
        nome: 'pastel',
        categoria: 'salgado'
    }
]

function listar_por_categoria(categoria) {
    let produtosFiltrados = []
    produtosFiltrados = produtos.filter(produto => (produto.categoria === categoria));
    console.log(produtosFiltrados)
    return produtosFiltrados;
}

listar_por_categoria('bijuteria');
