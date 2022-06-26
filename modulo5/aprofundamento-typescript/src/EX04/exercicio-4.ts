type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

b)

Criaria um script "start": "tsc && node ./build/index.js", para transpilar.

c)

Mudaria a saida no arquivo tsconfig.

c) 

Deixaria especificado todos os arquivos já no script "start"