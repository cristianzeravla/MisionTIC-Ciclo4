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