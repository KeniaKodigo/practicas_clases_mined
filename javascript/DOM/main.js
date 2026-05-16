// accedemos al documento HTML
console.log(document)

// seleccionar/acceder elementos
/**
 * getElementById() => solo accedemos a elementos del HTML que tenga un ID
 * querySelector() => podemos acceder por etiqueta, por clase, por ID, por atributo a un elemento del HTML
 * querySelectorAll()
 */

let titulo = document.getElementById("title")
console.log(titulo)

let entrada_dato = document.querySelector(".entrada_titulo") // llamando una clase
// let entrada_dato = document.querySelector("#entrada_titulo") llamando si fuera un ID
// document.querySelector("a[href='www.facebook.com']")

let formulario = document.querySelector("form")
console.log(formulario)
console.log(entrada_dato)

// seleccionando varios elementos
let lista_inputs = document.querySelectorAll(".entrada_titulo");
console.log(lista_inputs)

// accediendo al TEXTO del elemento del HTML
let texto_titulo = document.querySelector("h1").textContent;
//cambiando el contenido del <h1>
// texto_titulo.textContent = "Hola";
/**
 * innerHTML
 * innerText = devuelve el contenido de una etiqueta de texto y puede modificar el texto
 * textContent = devuelve el contenido de una etiqueta de texto y puede modificar el texto
 */
console.log(texto_titulo)


// Accediendo a la <section>
let contenedor = document.querySelector("#contenedor_dinamico");
console.log(contenedor)

// dibujando las etiquetas <p> dentro de la seccion
// template literals (``)
contenedor.innerHTML = `
    <p>Creando un parrafo desde javascript</p>
    <p>Algún día, primero Dios, has de quererme un poquito.<br> Yo levantaré el ranchito en que vivamos los dos</p>
`;

// utilizar eventos

// funcion para tirar confetti
function enviarConfetti(){
    //metodo de la libreria conffeti.js que hace la animacion de tirar conffeti
    confetti();
}

// funcion para envio de datos con una alerta bonita
function envioDatos(){
    Swal.fire({
        title: "Drag me!",
        icon: "success",
        draggable: true
    });
}