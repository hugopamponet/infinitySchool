let nome = " Hugo";
let idade = 30;
let nomeCompleto = "Hugo Pamponet "

//Eu não posso criar variável com o mesmo nome de uma já existente
nomeCompleto = "Fernando Guimarães Souza "

document.writeln(nomeCompleto + idade + nome);

//const -> é uma constante, ou seja, não pode mudar
//Cria um const quando se quer protejer algum valor
const aprendendo = 35

let alternativa = 20

const tentativa = alternativa

document.writeln("<br>")
document.writeln(tentativa)