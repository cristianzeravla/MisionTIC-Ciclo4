const express = require('express');
const userSchema = require('../models/post');

const router = express.Router();

//Create a new post
router.post('/posts', (req, res) => {
    const post = userSchema(req.body);
    post
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

//Get all posts
router.get('/posts', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

//Get a specific post
router.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// update a post
router.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, resumen, categoria, descripcion, recursos, imagen, estado } = req.body;
    userSchema
    .updateOne({ _id: id}, {set: { titulo, descripcion, recursos, imagen, estado }})
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// delete a post
router.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

module.exports = router


/*

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
*/

