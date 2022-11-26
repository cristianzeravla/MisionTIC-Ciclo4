const express = require('express');
const userSchema = require('../models/comment');

const router = express.Router();

//Create a new comment
router.post('/comments', (req, res) => {
    const comment = userSchema(req.body);
    comment
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

//Get all comments
router.get('/comments', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

//Get a specific comment
router.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// update a comment
router.put('/comments/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, correo, comentario } = req.body;
    userSchema
    .updateOne({ _id: id}, {set: { nombre, apellido, correo, comentario }})
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// delete a comment
router.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

module.exports = router