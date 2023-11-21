const express = require('express')

// Controladores
const cadastrarUsuario = require('./controladores/usuarios/cadastrarUsuario')

const rotas = express()

//Endpoints
rotas.post('/usuario', cadastrarUsuario)


module.exports = rotas