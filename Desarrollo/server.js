const express = require('express')
const app = express()

//Import conexion MongoDB
const archivoBD = require('./conexion')

//importar rutas y modelo de entrada
const rutasEntrada = require('./rutas/entrada')
const rutasUsuario = require('./rutas/usuario')

//Importar body parseurl
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/entradas', rutasEntrada)
app.use('/api/usuarios', rutasUsuario)

app.get('/', (req, res) => {
    res.end('Welcome to the homepage SERVER Node.js!')
})
//Configuracion servers
app.listen(5000, function() {
    console.log('SERVER ON')
})