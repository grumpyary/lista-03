const prompt = require("prompt-sync")();

var numberOne = Number(prompt( "Digite o primeiro numero. " ) )
var numberTwo = Number(prompt( "Digite o segundo numero. " ) )

if (numberOne === numberTwo) {
    console.log( 'Os numeros sao iguais. ')
} else {
    if (numberOne > numberTwo) {
        console.log(numberOne, numberTwo)
    }else if (numberTwo > numberOne) {
        console.log(numberTwo, numberOne)
    }
}