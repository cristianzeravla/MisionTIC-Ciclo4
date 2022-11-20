const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaentrada = new eschema({
    titulo: String,
    resumen: String,
    categoria: String,
    description: String,
    recursos: String,
    imagen: String,
    estado: String,
    identradas: String
})

const ModeloEntrada = mongoose.model('entradas', eschemaentrada)
module.exports = router

/*
router.get('/ejemplo', (req, res) => {
    res.end('saludo carga desde ruta ejemplo')
})
*/

router.post('/sendPost', (req, res) => {
    const nuevaentrada = new ModeloEntrada({
        titulo: req.body.titulo,
        resumen: req.body.resumen,
        categoria: req.body.categoria,
        description: req.body.description,
        recursos: req.body.recursos,
        imagen: req.body.imagen,
        estado: req.body.estado,
        identradas: req.body.identradas
    })
    nuevaentrada.save(function(err, entrada) {
        if (err) {
            res.status(500).send({message: `Error al guardar en la base de datos: ${err}`})
        }else{
            res.send('Entrada guardada')
            res.status(200).send({entrada})
        }
    })
})