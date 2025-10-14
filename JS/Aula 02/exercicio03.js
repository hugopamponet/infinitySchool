let nota = Number(prompt("Digite a sua nota"));

if(nota > 10 || nota < 0) {
    document.write("Nota Inválida");
}else if (nota > 9) {
    document.write("Nota A");
}else if(nota > 8) {
    document.write("Nota B");
}else if(nota > 7) {
    document.write("Nota C");
}else if(nota >= 6) {
    document.write("Nota D");
}else if (nota < 6){
    document.write("Nota E");
}else {
    document.write("Nota Inválida");
}
