var express = require('express');
var parser = require('body-parser');


var app = express();

var rotas = require('./routes/rotas.js');
var cors = require('cors');

app.use(cors());

app.use(parser.urlencoded({ extended : false }));

app.use(parser.json());


app.use('/', rotas);

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta localhost:3000")
})