const pool = require('../../conexao')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../../senha.jwt')

const detalharTransacao = async (req, res) => {
    const { id: idTransacao } = req.params
    let token = req.headers.authorization
    token = token.split(' ')[1]
    if (!token) return res.status(401).json({ message: "Não autorizado" })

    try {
        const { id: idUsuario } = jwt.verify(token, senhaJwt)
        //verificar se existe transação para o id enviado como parâmetro na rota e se esta transação pertence ao usuário logado.
        const { rows } = await pool.query('select * from transacoes where id = $1 and usuario_id = $2', [idTransacao, idUsuario])
        //se não existir transação para esse usuario logado
        if (rows < 1) return res.status(404).json({ message: "Transação não encontrada" })

        return res.status(200).json(rows)

    } catch (error) {
        console.log(error.message)
        return res.status(401).json({ mensagem: 'Não autorizado' })
    }

}

module.exports = detalharTransacao 