const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config')//vincular la conexión 

class Server {

    constructor() {
        this.app = express()

        //El puerto de la aplicacion
        this.port = process.env.port

        this.usuariosPath = '/api/usuarios'
        this.authPath = '/api/auth'

        //Metodo para la conexion  
        this.middlewares()

        // Incluir funcionalidades a la aplicacion
        this.conectarDB()

        // Incuir las rutas
        this.routes()
    }

    async conectarDB() {  
        await dbConnection()
    }

    middlewares() { 
        this.app.use(cors())
        this.app.use(express.static('public'))
        this.app.use(express.json()) 

    }

    routes() { //rutas de la aplicación
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
        this.app.use(this.authPath, require('../routes/auth'));
    }

    listen() { //Es para escucahr el puerto 
        this.app.listen(this.port, (req, res) => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }
}

module.exports = Server