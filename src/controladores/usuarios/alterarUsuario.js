const pool = require('../../conexao')

const atualizarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body
    const { id } = req.params

    try {
        const usuario = await pool.query('select * from usuarios where id = $1', [req.usuario.id])
        const email = await pool.query('select * from usuarios.email where email =$1', [req.usuario.email])

        if (!usuario) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado.' })
        }

        if (email) {
            return res.status(404).json({ mensagem: 'E-mail já cadastrado.' }) // ver codigo
        }

        const alteracaoUsuario = 'update usuarios set (nome, email, senha) values $1, $2, $3'

        await pool.query(alteracaoUsuario, [nome, email, senha, id])


        return res.status(204).send()
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro do servidor' })
    }
}

module.exports = atualizarUsuario
