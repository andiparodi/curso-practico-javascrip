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


const calcularGeometrica = () => {
  const productoElementos = nuevaLista.reduce(
    (elementoAcumulado, elementoIterado) => { 
    return elementoAcumulado * elementoIterado
    }, 1
)
   const mediaGeometrica = productoElementos ** (1/nuevaLista.length);
   return parseFloat(mediaGeometrica.toFixed(3));
}

const calculoGeometrica = () => {
  const result = calcularGeometrica(nuevaLista)


  userLista.innerText = `la geométrica de la lista es de ${result}`;
}