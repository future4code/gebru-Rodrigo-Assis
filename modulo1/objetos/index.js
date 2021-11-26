/* Exercícios de interpretação de código

1.

"Matheus Nachtergaele"
"Denise Fraga"
{canal: "Canal Brasil", horario: "19h"}

2.

a)

{nome: "Juca", idade: 3, raca: "SRD"}
{nome: "Juba", idade: 3, raca: "SRD"}
{nome: "Jubo", idade: 3, raca: "SRD"}

b)

Ela copia as informações do objeto, podendo assim modificar ou adicionar eles.

3.

a)

false 
undefined

b) o retorno da função era era uma propiedade do objeto, no sengundo console.log não foi definido uma propiedade existente logo é undefined



Exercícios de escrita de código

1.

a)

function recebeAlgo(pessoa) {

    return pessoa
 
  }

  const pessoa = {
  nome: "Rodrigo", 
  apelidos: ["Dig", "Digoleira", "digo"]
  }

const pessoa2 = {
 ...pessoa,
 apelidos: ["Gid", "Arielogid", "Ogid"]
}

console.log(recebeAlgo(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]} ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]} `))

b)

console.log(recebeAlgo(`Eu sou ${pessoa2.nome}, mas pode me chamar de: ${pessoa2.apelidos[0]} ${pessoa2.apelidos[1]} ou ${pessoa2.apelidos[2]} `))

2.

a)

const objt1 = {

    nome: "Rodrigo",
    idade: 25,
    profissao: "projetista"
    
    }
    
    const objt2 = {
    
    nome: "ogirdoR",
    idade: 52,
    profissao:"atsitejorp"
    
    }
  
b)

    function recebeAlgo(objetos){
    
      return console.log([objetos.nome, objetos.nome.length, objetos.idade, objetos.profissao, objetos.profissao.length])
    
    }
    
    recebeAlgo(objt1)
    

3.

a)


let carrinho = []

const fruta1 = {
  
  nome: "banana",
  temEssaPorra: true,

}

const fruta2 = {
  
  nome: "maca",
  temEssaPorra: true,

}

const fruta3 = {
  
  nome: "melancia",
  temEssaPorra: true,

}

function receba(fruta) {

return carrinho.push(fruta)
    
}

receba([fruta1,fruta2,fruta3])

console.log(carrinho)
 */
