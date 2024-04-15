'use strict'

// Cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');


// EJecutart express (http)
var app = express();


// Cargar ficheros rutar

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
var articles_routes = require('./routes/article');

// CORS
// configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});




// Añadir prefijos a rutas / Cargar rutas
app.use('/api',articles_routes);

// Exportar modulo (fichero actual)
module.exports = app;