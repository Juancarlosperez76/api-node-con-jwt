const { Router } = require('express')
const router = Router()

const { getUsuario, postUsuario, deleteUsuario, putUsuario, patchUsuario } = require('../controllers/usuarios')


router.get('/', getUsuario)

router.post('/', postUsuario)

router.put('/', putUsuario)

router.patch('/', patchUsuario)

router.delete('/', deleteUsuario)

//exportar módulo
module.exports = router