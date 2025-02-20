create database dindin; 

create table usuarios (
  id serial primary key, 
  nome text not null,
  email text unique,
  senha text unique 
  );

create table categorias (
  id serial primary key, 
  descricao text not null
  );
  
  create table transacoes (
    id serial primary key, 
    descricao text, 
    valor integer, 
    data timestamp default now(),
    categoria_id integer references categorias(id), 
    usuario_id integer references usuarios(id),
    tipo text not null
    );
    
--eu entendi que é para inserir assim as categorias
insert into categorias(descricao) values 
('Alimentação'), 
('Assinaturas e Serviços'),
('Casa'), 
('Mercado'),
('Cuidados Pessoais'), 
('Educação'), 
('Família'), 
('Lazer'), 
('Pets'), 
('Presentes'), 
('Roupas'), 
('Saúde'), 
('Transporte'), 
('Salário'), 
('Vendas'), 
('Outras receitas'), 
('Outras despesas');
