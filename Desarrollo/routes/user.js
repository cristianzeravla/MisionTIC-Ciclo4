const express = require('express');
const userSchema = require('../models/user');

const router = express.Router();


//Create a new user
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

//Get all users
router.get('/users', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

//Get a specific user
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// update a user
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, correo, password } = req.body;
    userSchema
    .updateOne({ _id: id }, { $set: { nombre, apellido, correo, password } })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// delete a user
router.delete('/users/:id', (req, res) => {
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

const eschemausuario = new eschema({
    nombre: String,
    apellido: String,
    correo: String,
    password: String,
    idusuario: String,    
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router

router.post('/sendUser', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        password: req.body.password,
        idusuario: req.body.idusuario
    })
    nuevousuario.save(function(err, usuario) {
        if (err) {
            res.status(500).send({message: `Error al guardar en la base de datos: ${err}`})
        }else{
            res.send('Usuario guardado')
            res.status(200).send({usuario})
        }
    })
})

*/