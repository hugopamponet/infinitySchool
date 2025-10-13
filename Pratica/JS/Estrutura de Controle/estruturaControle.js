let idade = Number(prompt("Qual é a sua idade?"));
let eRegistrado = prompt("Responda com as seguintes palavras: registrado ou não registrado. Você é registrado?")

let permissaoIdade = (idade >= 18) ? 'Maior de idade' : 'Menor de idade';
console.log(permissaoIdade)

let registrados
switch (eRegistrado) {
    case "registrado":
        registrados = 'Seja Bem-vindo'
        break;
    
    case "não registrado":
        registrados = 'Complete o seu cadastro'
        break;
    
    default:
        registrados = 'Status desconhecido'
}

console.log(registrados)

if (idade >= 18 && eRegistrado === "registrado") {
    console.log("Acesso completo")
}else if(idade >= 17 || eRegistrado === " não registrado"){
    console.log("Acesso limitado")
}