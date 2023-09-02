const prompt = require("prompt-sync")();

var option = Number(prompt(" Digite a opcao: 1, 2 ou 3. "))

var numberOne = Number(prompt(" Digite o primeiro numero. "))
var numberTwo = Number(prompt(" Digite o segundo numero. "))
var numberThree = Number(prompt(" Digite o terceiro numero. "))

if (option === numberOne) {
    console.log( ` O valor da opcao e: ${numberOne} ` )
}
    else if (option === numberTwo) {
        console.log( ` O valor da opcao e: ${numberTwo} `)
    }
    else if (option === numberThree) {
        console.log(` O valor da opcao e: ${numberThree}` )
    }
    else if (option !== numberOne !== numberTwo !==numberThree) {
        console.log(` Opcao invalida ` )
    }
