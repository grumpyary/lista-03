const prompt = require("prompt-sync")();

var lenght = Number(prompt(' Informe o comprimento da pista em metros. ' ))
var timeOne = Number(prompt(' Informe o tempo 1st em segundos ' ))
var timeTwo = Number(prompt(' Informe o tempo 2nd em segundos ' ))

var speedOne = Math.sqrt( lenght / timeOne )
    console.log(` Velocidade do 1st e: ${speedOne}`)

var speedTwo = Math.sqrt( lenght / timeTwo )
console.log(` Velocidade do 2nd e: ${speedTwo}`) 

    if (speedOne > speedTwo) {
        console.log(' 1st is faster ')
    }

    else if (speedTwo > speedOne){
        console.log(' 2nd is faster ' )
    }
