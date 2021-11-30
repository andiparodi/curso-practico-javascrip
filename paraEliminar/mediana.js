const calcularPromedio = (lista) => {

  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) =>
     valorAcumulado + nuevoElemento)

  const promedioLista = sumaLista / lista.length
  return promedioLista
}

let nuevaLista = []

const esPar = (n) => n % 2 === 0


const ordernarLista = (lista) => {
  function compareNumbers(a, b) {
    return a - b;
  }
  lista.sort(compareNumbers)
}

const agregarValorLista = (event) => {
  event.preventDefault()

  const userList = document.getElementById("valorLista")
  const value = Number(userList.value)
  userList.value = ''
  
  nuevaLista.push(value)

  ordernarLista(nuevaLista)

  userLista.innerText = `${nuevaLista}`;
  console.log(nuevaLista)
}

let mediana;

const calcMediana = () => {

  const mitadLista = parseInt(nuevaLista.length / 2)

  if(esPar(nuevaLista.length)) {
    const elemento1 = nuevaLista[mitadLista - 1]
    const elemento2 = nuevaLista[mitadLista] 

    const result = calcularPromedio([elemento1, elemento2])
    console.log(result)
    

} else {
    mediana = nuevaLista[mitadLista]
    console.log(mediana)
  }
}


