const jwt = require('jsonwebtoken')
const senhaJwt = require('../senha.jwt')
const pool = require('../conexao')

const verificarUsuario = async (req, res, next) => {
    const { authorization } = req.headers;
    //Validar se o token foi enviado no header da requisição (Bearer Token)
    if (!authorization) {
        return res.status(401).json({ mensagem: 'Não autorizado' })
    }
    const token = authorization.split(' ')[1]
    try {
        //Verificar se o token é válido
        const { id } = jwt.verify(token, senhaJwt)

        //Consultar usuário no banco de dados pelo id contido no token informado
        const { rows, rowCount } = await pool.query('select * from usuarios where id = $1', [id])
        if (rowCount < 1) return res.status(401).json({ mensagem: 'Não autorizado' })

        req.usuario = rows[0]

        next()

    } catch (error) {
        console.log(error.message)
        return res.status(401).json({ mensagem: 'Não autorizado' })
    }
}

module.exports = verificarUsuario