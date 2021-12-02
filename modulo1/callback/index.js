/* Exercícios de interpretação de código

1.

Primeiro ele vai imprimir cada linha do array objeto do array,
depois os index e no final o array todo

{nome: "Amanda Rangel", apelido: "Mandi"} 0, [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ] 
  { nome: "Laís Petra", apelido: "Laura" } 1   
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }

 { nome: "Letícia Chijo", apelido: "Chijo" } 2 
 { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }

2.

["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

3.

["Mandi", "Laura"]


Exercícios de escrita de código

1.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 
 
 a)

 const nomeDog = pets.map((item, index, array) => {
    return item.nome })
  console.log(nomeDog)
 
 b)

 const soSalsicha = pets.filter((item, index, array) => {
   if (item.raca === "Salsicha")
   {return item}}
 )
   console.log(soSalsicha)
 
c)

 const soPoodle = pets.map((item, index, array) => {
   if (item.raca === "Poodle")
   {console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)}
 })

 2.

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 
 a)
 
 const nomeProduto = produtos.map((item, index, array) => {
    return item.nome })
  
  console.log(nomeProduto)

b)

const comDesconto = produtos.filter((item, index, array) => {

    delete item.categoria
    
    item.preco = item.preco - ((item.preco*5)/100)
    item.preco = Number(item.preco.toFixed(2))
    
    return item
    
    })
    
    console.log(comDesconto)

c)

const soBebida = produtos.filter((item, index, array) => {
    if (item.categoria === "Bebidas")
    {return item}})
    
  
  console.log(soBebida)

d)

const soYpe = produtos.filter((item, index, array) => {
    if (item.nome.includes("Ypê"))
    {return item}})
  
  console.log(soYpe)

e)

const soYpeF = produtos.filter((item, index, array) => {
    if (item.nome.includes("Ypê"))
    {return item }})
  
  const soYpeFrase = soYpeF.map((item) => {
    return `Compre ${item.nome} por ${item.preco}`
  })
  
  console.log(soYpeFrase)

  
  🏅  Desafios 🏅 

  const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

a)

 const ordemAlfa = pokemons.map((item) => {
  
    item.sort
     
     return item.nome
   })
   console.log(ordemAlfa)
   
b)

const soTipo = pokemons.map((item, i)=>{
  
    return item.tipo})
  
  
  const semRepetir = soTipo.filter((item, i)=>{
  
  return soTipo.indexOf(item) === i
  
  })
  console.log(semRepetir) */