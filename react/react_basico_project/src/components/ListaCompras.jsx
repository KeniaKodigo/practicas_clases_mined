//import React from 'react'

export default function ListaCompras({emoji}) {
    return (
        <div>
            <ul>
                <li>🍪 galletas</li>
                <li>☕ cafe</li>
                <li>🍇 uvas</li>
                <li>{emoji}</li>
            </ul>
        </div>
    )
}
