const pool = require('../../conexao')

const cadastrarTransacao = async (req, res) => {
    const { descricao, valor, categoria_id, tipo } = req.body

    if (!descricao || !valor || !categoria_id || !tipo) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' })
    }

    if (categoria_id < 1) {
        return res.status(400).json({ mensagem: 'Categoria não encontrada' })
    }

    try {
        const novaTransacao = await pool.query(
            'insert into transacoes (descricao, valor, categoria_id, tipo) values ($1, $2, $3, $4)'[
            descricao, valor, categoria_id, tipo])

        return res.status(204).send()
    } catch {
        return res.status(500).json({ mensagem: 'Erro do servidor' })
    }
}

module.exports = cadastrarTransacao