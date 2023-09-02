const prompt = require("prompt-sync")(); 

var A = Number(prompt('Qual valor de A?'))
var B = Number(prompt('Qual valor de B?'))
var C = Number(prompt('Qual valor de C?'))
var delta = B * B - (4 * A * C)
var raiz1 = (-B + Math.sqrt(delta)) / (2 * A)
var raiz2 = (-B - Math.sqrt(delta)) / (2 * A)

if (delta > 0){
    console.log(raiz1, raiz2)
}
if (delta === 0){
   console.log(raiz1)
}
else ( delta < 0 ) {
    console.log(`Nao existe raizes reais!`)
}