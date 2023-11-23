const pool = require('../../conexao')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../../senha.jwt')

const listarTransacoes = async (req, res) => {
    const { id } = req.usuario

    try {

        //fazendo a consulta sql para procurar as transacoes deste usuario logado 
        const { rows } = await pool.query('select * from transacoes where usuario_id = $1', [id])

        return res.status(200).json(rows)

    } catch (error) {
        return res.status(401).json({ mensagem: 'Não autorizado' })
    }
}

module.exports = listarTransacoes 