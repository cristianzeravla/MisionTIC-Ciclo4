const express = require('express')

//Configuracion servers
const app = express()
app.listen(5000, function() {
    console.log('SERVER ON')
})

//Import conexion MongoDB
const archivoBD = require('./conexion')

//importar rutas y modelo de entrada
const rutasEntrada = require('./routes/post')
const rutasUsuario = require('./routes/user')
const rutasComentario = require('./routes/comment')

app.use(express.json());
app.use('/api', rutasUsuario);
app.use('/api', rutasEntrada);
app.use('/api', rutasComentario);


app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

//cors
const cors = require('cors');

const whiteList = ["http://localhost:3000", "http://localhost:3001"];
 
app.use(cors({
    origin: whiteList
}));

/*
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
*/