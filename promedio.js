const lista1 = [
  100,
  200,
  300,
  500
]
const lista2 = [
  100,
  200,
  30330,
  5030
]
const lista3 = [
  222,
  23300,
  30440,
  50660
]

const cantidadElementos = lista1.length

let sumaLista = 0

const calcularPromedio = (lista) => {

  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) =>
     valorAcumulado + nuevoElemento)

  const promedioLista = sumaLista / lista.length
  return promedioLista
}

