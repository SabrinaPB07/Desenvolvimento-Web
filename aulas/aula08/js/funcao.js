// função sem parametros
function imprimirNome() {
    console.log('fulano')
}

// imprimirNome()

//função com parametros
function compararNumero(n1, n2){
    if(n1 == n2){
        console.log(true)
    } else {
        console.log(false)
    }
}

compararNumero()
compararNumero(5, 5)



function imprimirNome(pessoa) {
    console.log(pessoa.nome)
}

var pessoa = {
    nome: 'fulano'
}

imprimirNome(pessoa)
