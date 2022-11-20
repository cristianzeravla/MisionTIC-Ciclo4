const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ciencia');

const objetodb = mongoose.connection

objetodb.on('connected', ()=>{console.log('Conexion success at MongoDB')})
objetodb.on('error', ()=>{console.log('Conexion fail at MongoDB')})

module.exports = mongoose