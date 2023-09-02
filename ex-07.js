const prompt = require("prompt-sync")();

var numberOne = Number(prompt(` Digite o primeiro numero `))
var numberTwo = Number(prompt(` Digite o segundo numero `))
var numberThree = Number(prompt(` Digite o terceiro numero `))

// 1-2-3

if (numberOne < numberTwo & numberTwo < numberThree) {
    console.log(numberOne, numberTwo, numberThree)
}

// 1-3-2

else if (numberOne < numberThree & numberThree < numberTwo) {
        console.log(numberOne, numberThree, numberTwo)
}

    // 2-1-3

    else if (numberTwo < numberOne & numberOne < numberThree) {
    console.log(numberTwo, numberOne, numberThree)
}

// 2-3-1

    else if (numberTwo < numberThree & numberThree < numberOne) {
    console.log(numberTwo, numberThree, numberOne)
}

// 3-1-2

else if (numberThree < numberOne & numberOne < numberTwo) {
    console.log(numberThree, numberOne, numberTwo) ;
}

// 3-2-1 

else if (numberThree < numberTwo & numberTwo < numberOne) {
    console.log(numberThree, numberTwo, numberOne)
}
else {
    console.log(`Digite apenas numeros distintos.`)
}
