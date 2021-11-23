// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  
  const altura = prompt("Digite uma altura !")
  const largura = prompt("Digite uma largura !")
  
  const area = altura * largura
  
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  
  const ano = prompt("Qual o ano atual ?")
  const nasceu = prompt("Qual seu ano de nascimento ?")
  
  const idade = ano - nasceu

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  
  return  peso / (altura*altura)
  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual o seu nome ?")
  const idade = prompt("Qual a sua idade ?")
  const email = prompt("Qual o seu email ?")
  
  console.log ("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + "." )
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite uma cor ?")
  const cor2 = prompt("Digite outra cor ?")
  const cor3 = prompt("Digite mais uma cor ?")
 
  console.log ([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
return array[0] 

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}