const pool = require('../../conexao')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../../senha.jwt')
const login = async (req, res) => {
    const { email, senha } = req.body
    //validação de campos obrigatórios 
    if (!email || !senha) return res.status(400).json({ message: "Todos os campos são obrigatórios" })
    try {
        //validar e verificar email
        const usuario = await pool.query('select * from usuarios where email = $1', [email])

        if (usuario.rowCount < 1) {
            return res.status(404).json({ mensagem: 'email ou senha inválida' })
        }

        //verificar se a senha é válida 

        //gerar token de autenticação 
        const token = jwt.sign({ id: usuario.rows[0].id }, senhaJwt, { expiresIn: '2h' })

        const { senha: _, ...usuarioLogado } = usuario.rows[0]

        return res.json({ usuario: usuarioLogado, token })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: 'Erro do servidor' })
    }

}

module.exports = login