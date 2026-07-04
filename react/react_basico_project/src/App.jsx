import './App.css'
import Bienvenida from './components/Bienvenida'
import ListaCompras from './components/ListaCompras'
import confetti from "@hiseb/confetti";

// componente funcionales
function App() {

  // funcion para tirar confeti
  const tirarConfetti = () => {
      confetti();
  }

  return (
    <>
      <h1>Mi primer proyecto de react</h1>
      {/** llamando nuestros componentes y los podemos reutilizar */}
      <Bienvenida></Bienvenida>
      <ListaCompras />
      <ListaCompras />
      <ListaCompras />

      {/** boton dinamico, utilizando evento de javascript */}
      <button onClick={tirarConfetti}>Click Aqui!</button>
    </>
  )
}

export default App
