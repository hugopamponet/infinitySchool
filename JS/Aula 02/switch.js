let diaSemana = Number(prompt("Digite um número representando dia da semana"))

switch(diaSemana) {
    case 1:
        document.write("Domingo");
        break;
    case 2:
        document.write("Segunda-feira");
        break;
    case 3:
        document.write("Terça-feira");
        break;
    case 4:
        document.write("Quarta-feira");
        break;
    case 5:
        document.write("Quinta-feira");
        break;
    case 6:
        document.write("Sexta-feira");
        break;
    case 7:
        document.write("Sábado");
        break;
    default:
        document.write("Dia inválido");
}