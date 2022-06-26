### Exercício 1 ###

a) Cria uma referencia com uma coluna de outra tabela

b) Ok	

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint 
fails.
Informa que existe uma restrição de chave, eu entendi que é pq não existe a primary key que é o id.

d) ALTER TABLE Movie DROP COLUMN rating;

e) Não é possivel apagar pois existe um vinculo com outra tabela 

### Exercício 2 ###

a) Cria uma tabela com 2 referencias 
pega o id de um filme e o id de um actor e referencia 


b) Ok

c) Não é possivel criar pois não existe um id na tabela para referenciar 

d) Não é possivel apagar pois existe um vinculo com outra tabela 

### Exercício 3 ###

a)

Esta juntando duas tabelas diferentes com base na coluna X

b)

SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;




