/* 
a) 

const minhaString:string = 29

Ela sinaliza que o tipo number não pode ser atribuido a uma variavel de string.

b)

let meuNumero:number | string = "fala"  
console.log (meuNumero)

Para que a variavel aceite mais de um tipo de valor utilizamos o operador logico | .

c) e d)

type pessoa = { 
    nome: string, 
    idade: number, 
    corFavorita: ArcoIris}


enum ArcoIris  { 
        VERMELHO = "vermelha",
        LARANJA =  "laranja",
        AMARELO = "amarelo",
        VERDE =  "verde",
        AZUL = "azul",
        AZULESCURO = "azul-escuro",
        VIOLETA = "violeta" }


const pessoa1: pessoa = {
    nome: "Nina",
    idade: 4,
    corFavorita: ArcoIris.AZUL
    }
    
const pessoa2: pessoa = {
    nome: "Rafa",
    idade: 30,
    corFavorita: ArcoIris.VIOLETA
    }

const pessoa3: pessoa = {
    nome: "Arthur",
    idade: 23,        
    corFavorita: ArcoIris.AMARELO
    }  */

    
  
