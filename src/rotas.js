const express = require('express')
const verificarUsuario = require('./intermediadores/autenticacao') //importação do intermadiário autenticação

const rotas = express()

// Controladores
const cadastrarUsuario = require('./controladores/usuarios/cadastrarUsuario')
const login = require('./controladores/usuarios/login')
const detalharPerfilUsuario = require('./controladores/usuarios/detalharPerfilUsuario')
const listarCategorias = require('./controladores/categorias/listarCategorias')

//Endpoint cadastrar usuário
rotas.post('/usuario', cadastrarUsuario)
rotas.post('/login', login) //o login não precisa de verificação, ele que vai gerar o token para autenticar o resto dos endpoints

//intermediário (daqui pra baixo, todos usam a verificação)
rotas.use(verificarUsuario)

//Endpoints do usuário
rotas.get('/usuario', detalharPerfilUsuario)
rotas.put('/usuario',)
//Endpoint de categoria
rotas.get('/categoria', listarCategorias)

module.exports = rotas