function imprimirNome(nome, fcb1, fcb2) {
    console.log(nome)

    fcb1()
    fcb2(imprimirSobrenome)
}

function imprimirSobrenome(sobrenome){
    console.log(sobrenome)
}

//imprimirNome('fulano', imprimirSobrenome)

imprimirNome('miguel',
    () => {
        console.log('Ribeiro')
    }, (cb) => {
        cb('teste')
    })