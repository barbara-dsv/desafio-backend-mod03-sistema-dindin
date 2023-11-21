const express = require('express')
const verificarUsuario = require('./intermediadores/autenticacao') //importação do intermadiário autenticação

const rotas = express()

// Controladores
const cadastrarUsuario = require('./controladores/usuarios/cadastrarUsuario')
const login = require('./controladores/usuarios/login')
const detalharPerfilUsuario = require('./controladores/usuarios/detalharPerfilUsuario')

//Endpoint cadastrar usuário
rotas.post('/usuario', cadastrarUsuario)

//intermediário (daqui pra baixo, todos usam a verificação)
rotas.use(verificarUsuario)

//Endpoints do usuário
rotas.post('/login', login)
rotas.get('/usuario', detalharPerfilUsuario)
rotas.put('/usuario',)

module.exports = rotas