const pool = require('../../conexao')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../../senha.jwt')

const listarTransacoes = async (req, res) => {
    //pegando o token do headers la do insomnia
    let token = req.headers.authorization
    //aqui eu pego somente o token sem o Bearer
    token = token.split(' ')[1]
    //se não for enviado é porque o usuário não esta autenticado e não tem autorização
    if (!token) return res.status(401).json({ message: "Não autorizado" })
    try {
        //usuário logado dentificado através do ID presente no token de validação.
        const { id } = jwt.verify(token, senhaJwt)
        //fazendo a consulta sql para procurar as transacoes deste usuario logado 
        const { rows } = await pool.query('select * from transacoes where usuario_id = $1', [id])

        return res.status(200).json(rows)

    } catch (error) {
        return res.status(401).json({ mensagem: 'Não autorizado' })
    }
}

module.exports = listarTransacoes 