const prompt = require("prompt-sync")();

var day = (Number(prompt('Informe o dia.')))
var month = (Number(prompt('Informe o mês.')))
var year = (Number(prompt('Informe o ano.')))

var validDay = day > 0 && day <= 30
var validMonth = month > 0 && month <= 12
var validYear = year > 0

if (!validDay || !validMonth || !validYear ) {
    console.log('Data inválida.')
} else {
    if (year % 4 !== 0 && month === 2 && day > 28) {
        console.log(' Data inválida. ')
    } else if ( month === 2 && year % 4 === 0 && day > 29) {
        console.log(' Data inválida. ')
    } else {
        console.log.log(' Data válida. ')
    }
}
