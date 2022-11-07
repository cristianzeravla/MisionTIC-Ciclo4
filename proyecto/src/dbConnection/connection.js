const mongoose = require('mongoose')

const user = "root"
const password = " "
//const dbname = "ciencia"
const uri = `mongodb+srv://${user}:${password}@cluster0109.hoapyie.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri,{
    useNewUrlParser: true, 
    useUnifiedTopology:true
})
    .then (bd =>console.log('Base de datos conectada'))
    .catch (err => console.log(err))

/**module.exports = () =>{

    const connect = () => {
        mongoose.connect(uri,{useNewUrlParser: true, useFindAndModify:false}, 
        (err) => {
            if(err){
                console.log('Errorr!');
            } else {
                console.log('Base de datos conectada');    
            }
        }
        )
        }
        connect ();
    }**/
    
