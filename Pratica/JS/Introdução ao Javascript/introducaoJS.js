let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

console.log("Número 1:", numero1);
console.log("Número 2:", numero2);

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;
let resto = numero1 % numero2;

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Resto da divisão:", resto);

numero1 += numero2;
console.log("Após += (adição):", numero1);

numero1 -= numero2;
console.log("Após -= (subtração):", numero1);

numero1 *= numero2;
console.log("Após *= (multiplicação):", numero1);

numero1 /= numero2;
console.log("Após /= (divisão):", numero1);

numero1 %= numero2;
console.log("Após %= (resto):", numero1);