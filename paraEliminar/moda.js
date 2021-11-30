let nuevaLista = []

const agregarValorLista = (event) => {
  event.preventDefault()

  const userList = document.getElementById("valorLista")
  const value = Number(userList.value)
  userList.value = ''
  
  nuevaLista.push(value)

  userLista.innerText = `${nuevaLista}`;
  console.log(nuevaLista)
}

const calculoModa = () => {
  const listaCount = {};

  const cantidadNumeros = (n) => {
    if (listaCount[n]) {  
      listaCount[n] += 1
    } else {
      listaCount[n] = 1
    }
  }

  nuevaLista.map(elemento => {
    cantidadNumeros(elemento)
  });

  const listaArray = Object.entries(listaCount).sort((elementoA, elementoB) => elementoA[1] - elementoB[1])

  const moda = listaArray[listaArray.length - 1]

  console.log(moda)

  userLista.innerText = `la moda de esta lista es de ${moda[0]} y se repite ${moda[1]} veces`;

}