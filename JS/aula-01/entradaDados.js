//O prompt sempre vai ser uma string
let idade = prompt("Digite sua idade")
document.writeln(idade)

//O confirma sempre vai ser um boleano
let confirma = confirm("Qual é a idade digitada?")
document.writeln(confirma)

/**
 * Diferença entre parseInt() e parseFloat()
 * parseInt() corta as casas decimais
 * parseFloat() as casas decimais permanecem
 */

let number1 = "55.33"

//parseInt()
document.writeln(parseInt(number1))

//parseFloat()
document.writeln(parseFloat(number1))

//Para transformar um valor em string é usar o comando String()
let number2 = 55
document.writeln(String(number2))