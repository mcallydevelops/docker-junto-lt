const express = require('express')
const app = express()
const port = 3000


const { Pool } = require('pg')


const pool = new Pool({
    user: 'docker',
    host: 'localhost',
    database: 'workshop',
    password: 'docker',
    port: 5432,
})
pool.query('SELECT * FROM inventory', (err, res) => {
    console.log(err, res)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})