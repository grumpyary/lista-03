const prompt = require("prompt-sync")();

var dayOne = (Number(prompt('Informe o dia da primeira data.')))
var monthOne = (Number(prompt('Informe o mês da primeira data.')))
var yearOne = (Number(prompt('Informe o ano da primeira data.')))

var dayTwo = (Number(prompt('Informe o dia da segunda data.')))
var monthTwo = (Number(prompt('Informe o dia da segunda data.')))
var yearTwo = (Number(prompt('Informe o dia da seugnda data.')))

var amountMonthToDays = 30
var amountYearToDays = 365

var dateOneInDays = dayOne + (monthOne * amountMonthToDays) + (yearOne * 
    amountYearToDays)
var dateTwoinDays = dayTwo + (monthTwo * amountMonthToDays) + (yearTwo *
     amountYearToDays)

     if(dateOneInDays > dateTwoinDays) {
        console.log(`O valor entre as datas é de ${dateOneInDays - dateTwoinDays} ` )
     } else {
        console.log(`O valor entre das duas datas é de ${dateTwoinDays - dateOneInDays}`)
     }