/* Exercícios de interpretação de código

1.

a) O usuario insere um numero que é dividido por 2 e o resultado é comparado com 0.
b)Numeros pares
c)Numeros que sobram quando divididos por 2

2.

a) Ele pergunta uma fruta para o usuario, e retorna o preço dela !
b) O preço da fruta, maçã é, R$ 2.25, preco
c) O preço da fruta, pêra é, R$ 2.25 5.5, preco

3.

a)Perguntando para o usuario um numero e retornando para variavel um Number 
b) Para o 10 = Esse número passou no teste
   Para o -11 = Essa mensagem é secreta !!!
c) ai me pegou, vou executar para ver (Deu erro pq a mensagem não foi definida)


Exercícios de escrita de código

1.

a)


const idade = Number(prompt("Digite sua idade"))

if (idade >= 18) {
  console.log("Você pode dirigir")
} else {
  console.log("Você não pode dirigir.")
}

2.

const turno = prompt("Digite seu turno")

if ( turno ==== "m") {
  console.log("Bom Dia!")
} 
else if (turno === "v") {
  console.log("Boa Tarde!")
} 
else {console.log("Boa Noite!")}

3. 

const turno = prompt("Digite seu turno")
let resp
switch (turno) {
    
    case "m":
    resp = "Bom Dia!"
    break;
    
    case "v":
    resp = "Boa Tarde!"
    break;

    case "n":
    resp = "Boa Noite!"
    break;
}
    console.log(resp)

    4.

 const gen = prompt("Qual genero do filme ?")
const preco = Number(prompt("Qual preço do ingresso ?"))

     if (gen === "fantasia" && preco <= 15 ) { console.log("Bom filme!")
}
     else console.log("Escolha outro filme :(") 
