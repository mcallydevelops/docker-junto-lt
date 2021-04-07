const express = require('express');
const app = express();
const port = 8080;

const { Pool } = require('pg');

const pool = new Pool({
    user: 'docker',
    host: 'localhost',
    database: 'workshop',
    password: 'docker',
    port: 5432,
});

app.get('/hello', (req, res) => {
    try {
        res.send("Hello World!");
    } catch(e) {
        console.log(e);
        res.status(500).send('Something broke!');
    }
});

// app.get('/hellob', (req, res) => {
//     try {
//         res.send("Hello world without cached build");
//     } catch(e) {
//         console.log(e);
//         rse.status(500).send('Something broke!');
//     }
// });
//
//
// app.get('/helloc', (req, res) => {
//     try {
//         res.send("Hello world with cached build");
//     } catch(e) {
//         console.log(e);
//         rse.status(500).send('Something broke!');
//     }
// });

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM inventory');
        res.send(result.rows);
    } catch(e) {
        console.log(e);
        res.status(500).send('Something broke!');
    }
});

app.get('/id/:id', async(req, res) => {
    try {
        const arguments = [ req.params.id ];
        const result = await pool.query('SELECT * FROM inventory where id = $1', arguments);
        res.send(result.rows);
    } catch(e) {
        console.log(e);
        res.status(500).send('Something broke!');
    }

});

app.get('/name/:name', async(req, res) => {
    try {
        const arguments = [ req.params.name ];
        const result = await pool.query('SELECT * FROM inventory where name = $1', arguments);
        res.send(result.rows);
    } catch(e) {
        console.log(e);
        res.status(500).send('Something broke!');
    }

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});