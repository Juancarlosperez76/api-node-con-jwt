//instalar paquete json web tokens alv
const jwt = require('jsonwebtoken')

const generarJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const paylaod = { uid }
        jwt.sign(paylaod, process.env.Contrasena, {
            expiresIn: '1h',
        }, (err, token) => {
            if (err) {
                reject('Error al generar el token')
            }
            else {
                resolve(token)
            }
        })
    })
}

module.exports = {
    generarJWT
}
