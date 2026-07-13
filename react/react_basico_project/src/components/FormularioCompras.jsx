// import React from 'react'

import { useState } from "react";

export default function FormularioCompras() {
    // Estado 1: el array de productos ya agregados (la lista final)
    const [productos, setProductos] = useState([]);
    // Estado 2 y 3: lo que el usuario está escribiendo AHORA MISMO en el formulario
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(1);

    function handleSubmit(e) {
        e.preventDefault(); // evita que la página se recargue (comportamiento por defecto del form)

        const nuevoProducto = {
            id: Date.now(), // id único simple, genera un numero gigante
            nombre: nombre,
            cantidad: cantidad,
        };

        // OJO: no hago productos.push(...), creo un array NUEVO con el spread (...)
        setProductos([...productos, nuevoProducto]);

        // Limpio el formulario para el siguiente producto
        setNombre('');
        setCantidad(1);
    }

    function eliminarProducto(id) {
        setProductos(productos.filter((p) => p.id !== id));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ej: Huevos" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input type="number" min="1" value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))} />
                <button type="submit">Agregar</button>
            </form>

            <section>
                <h3>Lista de compras</h3>
                <ul>
                    {productos.map((p) => (
                    <li key={p.id}>
                        {p.cantidad} x {p.nombre} 
                        <button onClick={() => eliminarProducto(p.id)}>Eliminar</button>
                    </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
