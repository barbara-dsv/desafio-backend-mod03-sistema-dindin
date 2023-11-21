const express = require('express')

// Controladores
const cadastrarUsuario = require('./controladores/usuarios/cadastrarUsuario')
const login = require('./controladores/usuarios/login')
//importação do intermadiário
const verificarUsuario = require('./intermediário/autenticacao')

const rotas = express()

//Endpoints do usuário
rotas.post('/usuario', cadastrarUsuario)
rotas.post('/login', login)

//intermediário
rotas.use(verificarUsuario)


module.exports = rotas