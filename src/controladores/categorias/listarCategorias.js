const pool = require('../../conexao')

const listarCategorias = async (req, res) => {
    try {
        //query que seleciona todas as categorias que estão no banco de dados
        const { rows } = await pool.query('select * from categorias')
        //retorno direto na resposta porque esse rows já é um array 
        return res.status(200).json(rows)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json('Erro interno do servidor')
    }
}
module.exports = listarCategorias