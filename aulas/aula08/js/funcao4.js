//  Escopo de varieaveis

let nome = 'fulano' // global
let cpf = '32323323232323'

console.log(cpf)

if(nome == 'fulano'){
    let sobrenome = 'teste' //local
    console.log(sobrenome)
}

for (let index = 0; index < 1; index++){
    let nome2 = 'dolinho'
}

console.log(nome2)

