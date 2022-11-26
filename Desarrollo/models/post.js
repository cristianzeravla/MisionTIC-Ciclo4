const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    resumen: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    recursos: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },
    estado: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Post', userSchema);