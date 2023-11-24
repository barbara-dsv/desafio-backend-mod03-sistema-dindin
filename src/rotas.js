const express = require('express')
const verificarUsuario = require('./intermediadores/autenticacao')
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
const atualizarTransacao = require('./controladores/transacoes/atualizarTransacao')
const excluirTransacao = require('./controladores/transacoes/excluirTransacao')
const obterExtrato = require('./controladores/transacoes/obterExtrado')

//Endpoint cadastrar usuário
rotas.post('/usuario', cadastrarUsuario)
rotas.post('/login', login)

//intermediário 
rotas.use(verificarUsuario)

//Endpoints do usuário
rotas.get('/usuario', detalharPerfilUsuario)
rotas.put('/usuario', atualizarUsuario)
//Endpoint de categoria
rotas.get('/categoria', listarCategorias)
//Endpoints de transações 
rotas.get('/transacao', listarTransacoes)
rotas.get('/transacao/extrato', obterExtrato)
rotas.get('/transacao/:id', detalharTransacao)
rotas.post('/transacao', cadastrarTransacao)
rotas.put('/transacao/:id', atualizarTransacao)
rotas.delete('/transacao/:id', excluirTransacao)


module.exports = rotas