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

const calcArmonica = (lista) => {
  const sumaList = lista.reduce(
    (valorAcumulado, nuevoElemento) => valorAcumulado + (1 / nuevoElemento), 0
);

const mediaArmonica = lista.length / sumaList;
return parseFloat(mediaArmonica.toFixed(3));
} 

const calculoArmonica = () => {
  const result = calcArmonica(nuevaLista)


  userLista.innerText = `la armónica de la lista es de ${result}`;
}