const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const comentarioSchema = new Schema({
    nombre: String,
    correo: String,
    comentario: String,
}) 

//  modelo 

const Comentario = mongoose.model('Comentario',comentarioSchema);

module.exports = Comentario;