const prompt = require("prompt-sync")();

var nameOne = prompt('Digite o primeiro nome.')
var nameTwo = prompt('Digite o segundo nome.')
var nameThree = prompt('Digite o terceiro nome.')

var consoleOne = nameOne
var consoleTwo = nameTwo
var consoleThree = nameThree

// numberOne for o primeiro, Two e Three
//numberOne, Three, Two
//numberTwo for o primeiro, One, Three
//numberTwo, Three, One
//numberThree for o primeiro, Two, One
//numberThree, One, Two

// 1-2-3

if (nameOne < nameTwo & nameTwo < nameThree) {
    consoleOne = nameOne
    consoleTwo = nameTwo
    consoleThree = nameThree
}

// 1-3-2

else if (nameOne < nameThree & nameThree < nameTwo) {
    consoleTwo = 
}

// 2-1-3

else if (nameTwo < nameOne & nameOne < nameThree) {
    console.log(consoleTwo , consoleOne , consoleThree)
}

//2-3-1

else if(nameTwo , nameThree & nameThree < nameOne) {
    console.log(consoleTwo , consoleThree , consoleOne)
}

// 3-1-2

else if(nameThree < nameOne & nameOne < nameTwo) {
    console.log(nconsoleThree , consoleOne , consoleTwo)
}

// 3-2-1

else if (nameThree < nameTwo & nameTwo < nameOne) {
    console.log(consoleThree , consoleTwo , consoleOne)
}
