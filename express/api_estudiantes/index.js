// Mencionando el modulo de express para nuestro proyecto
const express = require('express')
// llamando el archivo de rutas
const estudiantesRutas = require('./routes/estudiantes.route')

// creando nuestro objeto central (global) que se utilizara en nuestro proyecto (rutas, funciones, configuraciones)
const app = express()

// indicamos que nuestra api tiene un middleware (procesar datos en formato JSON)
app.use(express.json())

app.listen(3000, () => {
    console.log("Hola, este es el servidor http://localhost:3000/")
})

// Ruta principal
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenidos a la API Estudiantes',
        descripcion: 'Gestionando la informacion de nuestros estudiantes',
        version: '1.0.0',
    })
})

// llamando las rutas que creamos en el archivo "estudiantes.route"
// por defecto TODAS las rutas de estudiantes empezaran con /estudiantes
app.use('/estudiantes', estudiantesRutas)