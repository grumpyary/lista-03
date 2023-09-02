const prompt = require("prompt-sync")();

var day = (Number(prompt('Infome o dia')))
var month = (Number(prompt('Informe o mês')))
var year = (Number(prompt(' Informe o ano ')))

var parameterDay = 1
var parameterMonth = 1
var parameterYear = 1960

var monthInDays = month * 30
var yearInDays = year * 365

var dateInDays = day + monthInDays + yearInDays

var parameterMonthInDays = parameterMonth * 30
var parameterYearinDays = parameterYear * 365

var parameterDateInDays = parameterDay + parameterMonthInDays + 
parameterYearinDays

var difference = dateInDays - parameterDateInDays
console.log(`Diferença de dia entre as datas: ${difference}`)
