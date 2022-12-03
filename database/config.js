const mongoose = require('mongoose')

const dbConnection = async () =>{
    try{
        mongoose.connect(process.env.MONGO_CNN, {})
        console.log('Estableciendo conexion con el servidor')
    }
    catch( error ){
        console.log('conexion no establecida')
    } 
}

module.exports = {
    dbConnection  
}



















