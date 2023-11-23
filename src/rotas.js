const express = require('express')
const verificarUsuario = require('./intermediadores/autenticacao') //importação do intermadiário autenticação

const rotas = express()

// Controladores
const cadastrarUsuario = require('./controladores/usuarios/cadastrarUsuario')
const login = require('./controladores/usuarios/login')
const detalharPerfilUsuario = require('./controladores/usuarios/detalharPerfilUsuario')
const listarCategorias = require('./controladores/categorias/listarCategorias')
const listarTransacoes = require('./controladores/transacoes/listarTransacoes')
const detalharTransacao = require('./controladores/transacoes/detalharTransacao')
const atualizarUsuario = require('./controladores/usuarios/atualizarUsuario')
const cadastrarTransacao = require('./controladores/transacoes/cadastrarTransacao')

//Endpoint cadastrar usuário
rotas.post('/usuario', cadastrarUsuario)
rotas.post('/login', login) //o login não precisa de verificação, ele que vai gerar o token para autenticar o resto dos endpoints

//intermediário (daqui pra baixo, todos usam a verificação)
rotas.use(verificarUsuario)

//Endpoints do usuário
rotas.get('/usuario', detalharPerfilUsuario)
rotas.put('/usuario', atualizarUsuario)
//Endpoint de categoria
rotas.get('/categoria', listarCategorias)
//Endpoints de transações 
rotas.get('/transacao', listarTransacoes)
rotas.get('/transacao/:id', detalharTransacao)
rotas.post('/transacao', cadastrarTransacao) // Cadastrar transação para o usuário logado
rotas.put('/transacao/:id',) //Atualizar transação do usuário logado
rotas.delete('/transacao/:id',)//Excluir transação do usuário logado
rotas.get('/transacao/extrato',)//Obter extrato de transações

module.exports = rotas