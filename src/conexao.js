const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '252801',
    database: 'dindin',
})

module.exports = pool 