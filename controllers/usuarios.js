const usuario = require('../models/usuarios')

const getUsuario = async (req, res) => {
    const usuario1 = await usuario.find()

    res.json({
        msg: 'Método GET Usuarios',
        usuario1
    })
}

const postUsuario = (req, res) => {
    const { Rol, Nombre, Apellidos, TipoDocumento, Documento, Direccion, Telefono, Correo, Contrasena, Estado } = req.body

    const usuario1 = new usuario({ Rol, Nombre, Apellidos, TipoDocumento, Documento, Direccion, Telefono, Correo, Contrasena, Estado })
    usuario1.save()

    res.json({
        msg: 'Método POST Usuarios',
        usuario1
    })
}

const putUsuario = async (req, res) => {
    const { Rol, Nombre, Apellidos, TipoDocumento, Documento, Direccion, Telefono, Correo, Contrasena, Estado } = req.body
    const usuario1 = await usuario.findOneAndUpdate({ Documento: Documento }, { Rol: Rol, Nombre: Nombre, Apellidos: Apellidos, TipoDocumento: TipoDocumento, Direccion: Direccion, Telefono: Telefono, Correo: Correo, Contrasena: Contrasena, Estado: Estado })

    res.json({
        msg: 'Método PUT Usuarios',
        usuario1
    })
}

const patchUsuario = async (req, res) => {
    const { Documento, Nombre, Estado } = req.body
    const usuario1 = await usuario.findOneAndUpdate({ Documento: Documento }, { Nombre: Nombre }, { Estado: Estado })

    res.json({
        msg: 'Método PATCH Usuarios',
        usuario1
    })
}

const deleteUsuario = async (req, res) => {
    const { Documento } = req.query
    const usuario1 = await usuario.findOneAndDelete({ Documento: Documento })

    res.json({
        msg: 'Método DELETE Usuarios',
        usuario1
    })
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    patchUsuario,
    deleteUsuario
}
