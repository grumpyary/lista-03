const prompt = require("prompt-sync")();

// var dateOne = newDate((prompt(`Informe a primeira data em DD/MM/AAAA`))).toISOtring();
// var dateTwo = newDate((prompt(`Informe a segunda data em DD/MM/AAAA`))).toISOtring();

// if ( dateOne > dateTwo) {
//     console.log( ` ${dateOne} , ${dateTwo}`)
// }
// else if ( dateTwo > dateOne ) {
//     console.log(` ${dateTwo} , ${dateOne}`)
// }

var dayOne = Number(prompt(` Digite o dia da primeira data. `));
var monthOne = Number(prompt(` Digite o mes da primeira data. `));
var yearOne = Number(prompt(` Digite o ano da primeira data. `));

var dayTwo = Number(prompt(` Digite o dia da segunda data. `));
var monthTwo = Number(prompt(` Digite o mes da segunda data. `));
var yearTwo = Number(prompt(` Digite o ano da segunda data. `));

var amountMonthInDays = 30 // quantos dias tem um mês
var amountYearinDays = 365 // quantos dias tem um ano

var dateOneInDays = dayOne + (monthOne * amountMonthInDays) + (yearOne * amountYearinDays)
var dateTwoinDays = dayTwo + (monthTwo * amountYearinDays) + (yearTwo * amountMonthInDays)

if (dateOneInDays < dateTwoinDays){
    console.log(`${dayOne}/${monthOne}/${yearOne}`)
    console.log(`${dayTwo}/${monthTwo}/${yearTwo}`)
} else {
    console.log(`${dayTwo}/${monthTwo}/${yearTwo}`)
    console.log(`${dayOne}/${monthOne}/${yearOne}`)
}