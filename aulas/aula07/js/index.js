var bancoDeDados = [
    {
        nome: "bolu de morangu",
        descricao: "melhor bolo do mundoo",
        preco: 10000,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "bolo de chocolate",
        descricao: "bolo toooop",
        preco: 100,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "bolu de cenoura com chocolate",
        descricao: "muito booooooooooom",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    }
]

var conteudoPrincipal = document.getElementById('conteudo-principal')

for (var produto of bancoDeDados){
    var conteudoProduto = document.createElement('div')
    conteudoProduto.className = "conteudo-produto"

    var imagem = document.createElement('img')
    imagem.src = produto.imagem
    conteudoProduto.appendChild(imagem)

    var nomeProduto = document.createElement('h2')
    nomeProduto.textContent = produto.nome
    conteudoProduto.appendChild(nomeProduto)

    var descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = produto.descricao
    conteudoProduto.appendChild(descricaoProduto)

    var precoProduto = document.createElement('p')
    precoProduto.textContent = produto.preco
    conteudoProduto.appendChild(precoProduto)

    

    conteudoPrincipal.appendChild(conteudoProduto)
}