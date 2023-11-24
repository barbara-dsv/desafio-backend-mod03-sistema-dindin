const pool = require('../../conexao')

const detalharPerfilUsuario = async (req, res) => {
    const { id } = req.usuario;

    try {

        const { rows, rowCount } = await pool.query('select * from usuarios where id = $1', [id])

        if (rowCount < 1) return res.status(401).json({ mensagem: 'Não autorizado.' })
        req.usuario = rows[0]

        const { senha: _, ...usuarioLogado } = req.usuario

        return res.status(200).json(usuarioLogado)

    } catch (error) {
        return res.status(401).json({ mensagem: 'Não autorizado' })
    }

}

module.exports = detalharPerfilUsuario