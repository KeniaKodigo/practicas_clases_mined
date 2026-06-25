// Gestionamos las rutas que vamos a manejar en la API de estudiantes

const express = require('express')
// utilizamos el modulos de manejo de rutas
const router = express.Router()
// importando los metodos del controlador
const {
    obtenerEstudiantes,
    obtenerEstudianteById,
    crearEstudiante,
    actualizarCorreo
} = require('../controller/estudiantes.controller')


router.get('/', obtenerEstudiantes) // estudiantes/
router.get('/:estudianteId', obtenerEstudianteById) // estudiantes/:estudianteId
router.post('/', crearEstudiante)
router.patch('/:estudianteId', actualizarCorreo)

module.exports = router