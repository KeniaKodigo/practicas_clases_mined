// Mencionando el modulo de express para nuestro proyecto
const express = require('express')

// creando nuestro objeto central (global) que se utilizara en nuestro proyecto (rutas, funciones, configuraciones)
const app = express()

// por defecto el puerto de express 3000
// servidor = localhost:3000
app.listen(3000, () => {
    console.log("Hola, estas utilizando express")
})