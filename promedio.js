let sumaLista = 0

const calcularPromedio = (lista) => {

  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) =>
     valorAcumulado + nuevoElemento)

  const promedioLista = sumaLista / lista.length
  return promedioLista
}

let nuevaLista = []

const calculoPromedio = () => {

  const userList = document.getElementById("valorLista")
  const value = userList.value
  userList.value = ''  

  const result = calcularPromedio(nuevaLista)
  
  userLista.innerText = `El promedio es de ${result}`
}

const agregarValorLista = (event) => {
  event.preventDefault()

  const userList = document.getElementById("valorLista")
  const value = Number(userList.value)
  userList.value = ''
  
  nuevaLista.push(value)
  userLista.innerText = `${nuevaLista}`;
  console.log(nuevaLista)
}

