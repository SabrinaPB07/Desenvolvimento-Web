let valor = 10
let taxa = 0.5
let ir = 0.38

let calcularValor = (
    valor,
    taxaIR,
    taxaIOF) => {
        return valor + taxaIOF + taxaIR
    }

var resultadoOperacao = (cb) => {
    let resultado = cb(valor, taxa, ir)

    console.log(resultado)
}

resultadoOperacao(calcularValor)

