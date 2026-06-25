// simulando una base de datos de estudiantes
const estudiantes = [
    { id: 1, nombre: "Ana García", edad: 18, correo: "ana.garcia@email.com" },
    { id: 2, nombre: "Carlos López", edad: 17, correo: "carlos.lopez@email.com" },
    { id: 3, nombre: "María Pérez", edad: 18, correo: "maria.p@email.com" }
]

// metodo para obtener estudiantes
const obtenerEstudiantes = (req, res) => {
    res.status(200).json(estudiantes)
}

// metodo para obtener un estudiante por ID
const obtenerEstudianteById = (req, res) => {
    //capturando el valor del parametro
    const id = Number(req.params.estudianteId); 
    //devolvemos el estudiante con el metodo find
    const encontrar_estudiante = estudiantes.find(estudiante => estudiante.id === id);

    //validando si el estudiante NO existe
    if(!encontrar_estudiante){
        return res.status(404).json({ error: 'Estudiante no encontrado' })
    }

    res.status(200).json(encontrar_estudiante)
}

// metodo para registrar un nuevo estudiante
const crearEstudiante = (req, res) => {
    // haciendo el cuerpo de datos para registrar el estudiante
    const { nombre, edad, correo } = req.body

    // agregamos los datos ingresados a un objeto
    const nuevoEstudiante = {
        id: estudiantes.length + 1,
        //nombre: nombre
        nombre,
        edad,
        correo
    }

    //agregamos el nuevo objeto al arreglo
    estudiantes.push(nuevoEstudiante);

    res.status(201).json({
        message: 'Registrado exitosamente',
        estudiante: nuevoEstudiante
    })

}

// metodo para actualizar el correo del estudiante
const actualizarCorreo = (req, res) => {
    // primero encontramos al estudiante a actualizar
    const id = Number(req.params.estudianteId); 
    const encontrar_estudiante = estudiantes.find(estudiante => estudiante.id === id);

    //validando si el estudiante NO existe
    if(!encontrar_estudiante){
        return res.status(404).json({ error: 'Estudiante no encontrado' })
    }

    // segundo si el estudiante existe, actualizamos su correo
    const { nuevo_correo } = req.body
    encontrar_estudiante.correo = nuevo_correo

    res.status(200).json({
        message: 'Correo actualizado exitosamente',
        estudiante: encontrar_estudiante
    })
}

// exportando los metodos para que se utilicen en otros archivos
module.exports = {
    obtenerEstudiantes,
    obtenerEstudianteById,
    crearEstudiante,
    actualizarCorreo
}