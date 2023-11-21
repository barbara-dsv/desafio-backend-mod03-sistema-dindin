const jwt = require('jsonwebtoken')
const senhaJwt = require('../../senha.jwt')
const pool = require('../../conexao')

const detalharPerfilUsuario = async (req, res) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ mensagem: 'Não autorizado' })
    }
    const token = authorization.split(' ')[1]
    try {
        //usuário identificado através do ID presente no token de autenticação
        const { id } = jwt.verify(token, senhaJwt)
        // obter o usuário com base no id
        const { rows, rowCount } = await pool.query('select * from usuarios where id = $1', [id])
        //verifica se usuario foi encontrado
        if (rowCount < 1) return res.status(401).json({ mensagem: 'Não autorizado' })
        req.usuario = rows[0]
        //remove a senha do objeto do usuário
        const { senha: _, ...usuarioLogado } = rows[0]

        return res.status(200).json(usuarioLogado)

    } catch (error) {
        return res.status(401).json({ mensagem: 'Não autorizado' })
    }

}

module.exports = detalharPerfilUsuario