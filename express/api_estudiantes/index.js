// Mencionando el modulo de express para nuestro proyecto
const express = require('express')

// creando nuestro objeto central (global) que se utilizara en nuestro proyecto (rutas, funciones, configuraciones)
const app = express()

// indicamos que nuestra api tiene un middleware (procesar datos en formato JSON)
app.use(express.json())

// simulando una base de datos de estudiantes
const estudiantes = [
    { id: 1, nombre: "Ana García", edad: 18, correo: "ana.garcia@email.com" },
    { id: 2, nombre: "Carlos López", edad: 17, correo: "carlos.lopez@email.com" },
    { id: 3, nombre: "María Pérez", edad: 18, correo: "maria.p@email.com" }
]

// por defecto el puerto de express 3000
// servidor = localhost:3000
app.listen(3000, () => {
    console.log("Hola, este es el servidor http://localhost:3000/")
})

// comando para ejecutar el servidor (archivo) -> node index.js

// creando enrutamiento para nuestra API

// creando la ruta principal (peticion HTTP: GET, POST, PUT, DELETE, PATCH)
/**
 * (primer parametro) req = request (se utiliza cuando necesitamos por ejemplo datos del usuario (body), headers, parametros)
 * (segundo parametro) res = response (lo que se devuelve al cliente)
 */

// Mi primer endpoint
app.get('/', (req, res) => {
    //codigo de la funcion
    res.send("Hola Mundo, Bienvenidos a mi API Estudiantes")
})

// ruta para obtener todos los estudiantes (segundo endpoint)
app.get('/estudiantes', (req, res) => {
    // codigo
    res.status(200).json(estudiantes)
})

// ruta para buscar un estudiante por ID


// ruta para crear un nuevo estudiante


// ruta para actualizar un estudiante (correo)