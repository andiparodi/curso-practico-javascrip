const calcularDescuento = (precio, descuento) => {
  const porcentajeTotal = 100
  const descuentoFinal = (precio * (porcentajeTotal - descuento)) / porcentajeTotal
  return descuentoFinal
}



const calculoDescuento = () => {
  const precio = document.getElementById("precioOriginal")
  const valorPrecio = Number(precio.value)

  const descuento = document.getElementById("valorDescuento")
  const valorDescuento = Number(descuento.value)

  const result = calcularDescuento(valorPrecio, valorDescuento)
  
  resultPrecio.innerText = `El precio con un descuento ${valorDescuento}% del es de $${result}`
}

// Mostrar resultado sin boton, con evento keyup (a corregir)

// precio.addEventListener("keyup", (event) => {
//   console.log(event)
//   const valor = event.target.value
//   console.log(valor)
//   const valorAMostrar = "";
//   if (valor !== "") {
//     valorAMostrar = valor
//   } else {
//     valorAMostrar = "Input vacio"
//   }
//   document.getElementById("resulPrecio").innerHTML = valorAMostrar
// })