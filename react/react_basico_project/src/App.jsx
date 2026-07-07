import { useState } from 'react';
import './App.css'
import Bienvenida from './components/Bienvenida'
import ListaCompras from './components/ListaCompras'
import confetti from "@hiseb/confetti";

// componente funcionales
function App() {
  // como declarar un estado
  /**
   * 2 valores a tomar en cuenta
   * [0] = es el que se encarga de mostrar/guardar el estado
   * [1] = es el que se encarga de actualizar el estado
   */
  const [contador, setContador] = useState(0) //valor inicial

  // funcion para tirar confeti
  const tirarConfetti = () => {
      confetti();
  }

  return (
    <>
      <h1 className="titulo">Mi primer proyecto de react</h1>
      {/** llamando nuestros componentes y los podemos reutilizar */}

      {/** pasando datos como props */}
      <Bienvenida usuario="Martha Santos" confetti={tirarConfetti} ></Bienvenida>
      <ListaCompras />
      <ListaCompras />
      <ListaCompras />

      {/** boton dinamico, utilizando evento de javascript */}
      <button onClick={tirarConfetti}>Click Aqui!</button>
    </>
  )
}

export default App
