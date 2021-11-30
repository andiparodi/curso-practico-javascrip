let coupons = [
  {name: "cupon10", discount: 10},
  {name: "cupon15", discount: 15},
  {name: "cupon20", discount: 20},
  {name: "cupon25", discount: 25}
]

const calcularDescuento = (precio, descuento) => {
  const porcentajeTotal = 100
  const descuentoFinal = (precio * (porcentajeTotal - descuento)) / porcentajeTotal
  return descuentoFinal
}

const calcularDescuentoCupon = (precio, descuento, cupon) => {
  const porcentajeTotal = 100
  const descuentoCupon = porcentajeTotal - (descuento + cupon)
  const descuentoFinal = (precio * descuentoCupon) / porcentajeTotal
  return descuentoFinal
}


const calculoDescuento = () => {
  
  const precio = document.getElementById("precioOriginal")
  const valorPrecio = Number(precio.value)

  const descuento = document.getElementById("valorDescuento")
  const valorDescuento = Number(descuento.value)

  const cupon = document.getElementById("inputCoupon")
  const valorCupon = (cupon.value)

  const esValido = cupon => cupon.name === valorCupon
  const validaCupon = coupons.find(esValido)
    

  if(!valorCupon != !validaCupon) {
    noValido.innerText = `Ese cupon no es válido`
  } else {
    noValido.innerText = ``
  }

  if(!validaCupon) {
    const result = calcularDescuento(valorPrecio, valorDescuento)
    resultPrecio.innerText = `El precio con un descuento ${valorDescuento}% del es de $${result}`
    
  } else {
        let cuponAplicado = validaCupon.discount
        const result1 = calcularDescuentoCupon(valorPrecio, valorDescuento, cuponAplicado)
        resultPrecio.innerText = `El precio final, con el descuento del ${valorDescuento}% más el cupón promocional, es de $${result1}`
      }
} 