/* Exercícios de interpretação de código

1. 
a. false
b. false
c. true
d. booleano

2.
Colocar o Number() na frente do Prompt para que a resposta seja em numero e não em string

Exercícios de interpretação de código

1.
const idade1 = Number(prompt("Qual a sua idade ?"))
const idade2 = Number(prompt("Qual a idade do seu melhor amigx ?"))

console.log ("Sua idade é maior do que a do seu amigx ?", idade1 > idade2)
console.log (idade1 - idade2) 


2. 
const npar = Number(prompt("Digite um numero par ?"))

const div = npar % 2

console.log (div)

Todo numero inteiro dividido por 2 será 0, e todo numero inteiro impar dividido por 2 será 1 

3.
const anos = Number(prompt("Digite quantos anos vc tem?"))

const meses = anos * 12
const dias = anos * 365
const horas = anos * 8760

console.log ("Sua idade em meses é ", meses)
console.log ("Sua idade em dias é ", dias)
console.log ("Sua idade em horas é ", horas)

4.
const n1 = Number(prompt("Diga um numero !"))
const n2 = Number(prompt("Diga outro numero !"))

const div1 = n1 % n2
const div2 = n2 % n1

console.log ("O primeiro numero é maior que o segundo?", n1 > n2)
console.log ("O primeiro numero é igual ao segundo?", n1 === n2)
console.log ("O primeiro numero é divisível pelo segundo?", div1 === 0)
console.log ("O segundo numero é divisível pelo primeiro?", div2=== 0) */


