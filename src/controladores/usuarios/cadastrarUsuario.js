const pool = require('../../conexao')
// verificar se está certa essa parte de importar -Gra


const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body
    try {
        const novoUsuario = await pool.query('insert into usuarios (nome, email, senha) values ($1, $2, $3) returning *', [nome, email, senha])

        return res.status(201).json(novoUsuario.rows[novoUsuario.lenght - 1])
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro do servidor' })
    }
}

module.exports = cadastrarUsuario 