
// recibiendo datos de otro componente
// desestructuracion de elementos (props)
function Bienvenida({usuario, confetti}) {
    // parte funcional/js
    let mensaje = "Hola 👋";

    // lo que va ver el usuario
    return (
        <div>
            <h2>Bienvenido a mi lista de compras 🛒</h2>
            <p>{mensaje} Un gusto de saludarte {usuario}!</p>

            <button onClick={confetti}>Bienvenido 🎊</button>
        </div>
    )
}

export default Bienvenida


