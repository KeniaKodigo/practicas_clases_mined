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

let formulario = document.querySelector("form")
console.log(formulario)
console.log(entrada_dato)


// utilizar eventos