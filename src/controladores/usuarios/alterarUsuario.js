//terminar depois - gra

const express = require('express')
const pool = require('../../conexao')
//talvez precise importar o dumpsql mas não consegui aaaa

const atualizarUsuario = (req, res) => {
    const { nome, email, senha } = req.body

    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: 'Todos os campos precisam ser preenchidos.' })
    }

    try {
        if ()

            const alteracaoUsuario = await pool.query(
                'insert into usuarios.id (nome, email, senha) values $1, $2, $3 returning *',
                [nome, email, senha]
            )

        return res.status(201).json(alteracaoUsuario.rows[0])
    } catch (error) {

    }

}
