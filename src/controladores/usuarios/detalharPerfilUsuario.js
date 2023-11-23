const jwt = require('jsonwebtoken')
const senhaJwt = require('../../senha.jwt')
const pool = require('../../conexao')

const detalharPerfilUsuario = async (req, res) => {
    const { id } = req.usuario;
    try {
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