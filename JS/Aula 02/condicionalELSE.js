let idade = Number(prompt("Qual é a sua idade"));

if (idade >= 18) {
    document.write("Você tem " + idade + " anos, você pode dirigir");
}else {
    document.write("Você tem " + idade + " anos, você não pode dirigir");
}