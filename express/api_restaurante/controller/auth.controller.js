const prisma = require('../prisma/client')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const SECRET = 'clave_secreta_123'

// POST /api/auth/register
const registro = async (req, res) => {
    const { nombre, correo, password } = req.body

    // verificar si el correo ya existe
    const existe = await prisma.usuario.findUnique({
        where: { correo }
    })

    if (existe) {
        return res.status(400).json({ error: 'El correo ya está registrado' })
    }

    // encriptar la password
    const passwordEncriptada = await bcrypt.hash(password, 10)

    // crear el usuario
    const nuevoUsuario = await prisma.usuario.create({
        data: {
            nombre,
            correo,
            password: passwordEncriptada //aqui se guarda la contraseña ya como secreta
        }
    })

    res.status(201).json({
        message: 'Usuario registrado exitosamente',
        usuario: {
            id: nuevoUsuario.id,
            nombre: nuevoUsuario.nombre,
            correo: nuevoUsuario.correo,
            rol: nuevoUsuario.rol
        }
    })
}

// POST /api/auth/login
const login = async (req, res) => {
    const { correo, password } = req.body

    if (!correo || !password) {
        return res.status(400).json({ error: 'Correo y password son requeridos' })
    }

    // buscar el usuario
    const usuario = await prisma.usuario.findUnique({
        where: { correo }
    })

    if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' })
    }

    // verificar la password
    const passwordValida = await bcrypt.compare(password, usuario.password)

    if (!passwordValida) {
        return res.status(401).json({ error: 'Password incorrecta' })
    }

    // generar el token, recibimos el PAYLOAD (datos del usuario)
    // SECRET es la firma secreta que usa el servidor para generar y verificar el token
    // en este caso va expirar en 8 horas
    const token = jwt.sign(
        { id: usuario.id, correo: usuario.correo, rol: usuario.rol },
        SECRET,
        { expiresIn: '8h' }
    )

    res.status(200).json({
        message: 'Login exitoso',
        token
    })
}

module.exports = { registro, login }

