var bancoDeDados = [
    {
        nome: "camiseta Steven Universo",
        descricao: "o melhor desenho do Mundo!",
        preco: 45.00,
        imagem: "https://http2.mlstatic.com/camiseta-infantil-desenhos-steven-universo-camisetas-desenho-D_NQ_NP_835901-MLB20432461206_092015-O.jpg"
    },
    {
        nome: "camiseta Queen",
        descricao: "Essa banda não tem defeitos!",
        preco: 45.00,
        imagem: "https://images-na.ssl-images-amazon.com/images/I/71%2B8Q1j0JLL._AC_UL1200_.jpg"
    },
    {
        nome: "camiseta David Bowie",
        descricao: "o melhor cantor da Galáxia!",
        preco: 45.00,
        imagem: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lnreyf34cuy127"
    },
    {
        nome: "camiseta Batman",
        descricao: "Eu sou o Batman.",
        preco: 45.00,
        imagem: "https://camisetas-de.com/wp-content/uploads/2015/07/41njluIuhlL.jpg"
    },
    {
        nome: "camiseta Loud",
        descricao: "Apenas faça o L",
        preco: 150.00,
        imagem: "https://tse4.mm.bing.net/th?id=OIP.w0E3_-fFnCeDYwrNhfGYowHaHa&pid=Api&P=0&h=180"
    },
    {
        nome: "camiseta Star Wars",
        descricao: "Pam pam pam pam pam pammm pamm!",
        preco: 45.00,
        imagem: "https://elgeniodelalampara.com/wp-content/uploads/2021/09/camiseta-star-wars.jpg"
    },
    {
        nome: "camiseta Sonserina",
        descricao: "Sonserina não! Sonserina não!",
        preco: 45.00,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_798129-MLB45430281054_042021-F.jpg"
    },
    {
        nome: "camiseta Corvinal",
        descricao: "Muito melhor que Sonserina!",
        preco: 45.00,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_951579-MLB42920261073_072020-O.jpg"
    },
    {
        nome: "camiseta Coringa",
        descricao: "HAHAHAAHAHAH!",
        preco: 45.00,
        imagem: "https://img.elo7.com.br/product/zoom/27AB746/camiseta-coringa-explosao-camisa.jpg"
    },
    {
        nome: "camiseta JoJo",
        descricao: "melhor anime do mundo",
        preco: 45.00,
        imagem: "https://regalame.ec/wp-content/uploads/2019/02/camiseta-jojos-bizarre-adventure.jpg"
    },
    {
        nome: "camiseta Resident Evil",
        descricao: "eerrgg! arrgg!",
        preco: 45.00,
        imagem: "https://tse1.mm.bing.net/th?id=OIP.7oy8JmPfnS752nZE4XFXBQHaG7&pid=Api&P=0&h=180"
    },
    {
        nome: "camiseta básica",
        descricao: "pra quem é sem graça",
        preco: 30.00,
        imagem: "https://tse3.mm.bing.net/th?id=OIP.tqdVEetaBTw9WwXJ7ma48gHaJo&pid=Api&P=0&h=180"
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
    precoProduto.textContent = `R$ ${produto.preco}`
    conteudoProduto.appendChild(precoProduto)

    var botoes = document.createElement('div')
    botoes.className = "btn"
    conteudoProduto.appendChild(botoes)

    var botaoComprar = document.createElement('button')
    botaoComprar.textContent = "Comprar"
    botoes.appendChild(botaoComprar)

    var botaoDetalhes = document.createElement('button')
    botaoDetalhes.textContent = "Detalhes"
    botoes.appendChild(botaoDetalhes)

    
    conteudoProduto.appendChild(botoes)
    conteudoPrincipal.appendChild(conteudoProduto)
}