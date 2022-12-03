const { response } = require('express')
const { generarJWT } = require('../helpers/generar-jwt')
const usuario = require('../models/usuarios')

const login = async (req, res) => {

    const { Correo, Contrasena } = req.body

    //si el correo existe en la base de datos
    try {

        const usuarios = await usuario.findOne({ Correo })

        if (!usuarios) {
            return res.status(400).json({
                msg: 'Usuario o correo no existe'
            })
        }

        if (usuarios.Contrasena != Contrasena) {
            return res.status(400).json({
                msg: 'Contraseña incorrecta'
            })
        }

        const token = await generarJWT(usuarios.id)
        res.json({
            usuarios,
            token
        })
        
    } catch (err) {
        console.log('Contacte el administrador del sistema')
    }
}

module.exports = {
    login
}