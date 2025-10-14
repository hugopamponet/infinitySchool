let numero1 = Number(prompt("Digite o primeiro número"))
let operador = Number(prompt("Digite o operador"))
let numero2 = Number(prompt("Digite o segundo número"))

switch(operador) {
    case "+":
        const resultadoSoma = numero1 + numero2;
        document.write(resultadoSoma);
        break;
    case "-":
        const resultadoSubtracao = numero1 - numero2;
        document.write(resultadoSubtracao);
        break;
    case "*":
        const resultadoMultiplicacao = numero1 * numero2;
        document.write(resultadoMultiplicacao);
        break;
    case "/":
        const resultadoDivisao = numero1 / numero2;
        break;
}