// Arrays/listas/vetores
//Arrays se assemelham com bancos de dados
// um array deve ser capaz de adicionar, remover, bucscar/listar, atualizar

var nome = 'fulano' // variavel simples
var nomes = ['miguel', 'mateus', 'monica'] // variavel composta (array)
// var idades = new Array()

console.log(nomes)
// console.log(idades)
//console.log(nomes[0])
//console.log(nomes[1])
//console.log(nomes[2])

nomes.push('davi', 'fulano', 'ciclano') // adicona elemento no Array
console.log(nomes)

console.log(nomes.length) // tamanho do Array

nomes.pop() // por padrão remove o ultimo elemento do Array
console.log(nomes)

nomes.reverse() // inverte meu array
console.log(nomes)

nomes.shift() // por padrão remove o primeiro elmento do array
console.log(nomes) 

nomes.sort() // ordena o array
console.log(nomes)

nomes.push('fulano')
console.log(nomes)

var pocisaoFulano = nomes.indexOf('miguel') // busca por indice o elemento do parametro
nomes.splice(pocisaoFulano, 1) // primeiro parametro é a posicao do item a ser removido, o segundo parametro é a quantidade de itens do elemento excluidos
console.log(nomes)

