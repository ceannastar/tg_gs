const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.get('/res', (req, res) => {
    res.send('Hello, World!');
})

app.listen(8080, () =>{})