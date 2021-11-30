// ----------------------> Promedio

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

// ----------------------> Mediana
// const calcularPromedio = (lista) => {

//   const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) =>
//      valorAcumulado + nuevoElemento)

//   const promedioLista = sumaLista / lista.length
//   return promedioLista
// }

// let nuevaLista = []

// const esPar = (n) => n % 2 === 0


// const ordernarLista = (lista) => {
//   function compareNumbers(a, b) {
//     return a - b;
//   }
//   lista.sort(compareNumbers)
// }

// const agregarValorLista = (event) => {
//   event.preventDefault()

//   const userList = document.getElementById("valorLista")
//   const value = Number(userList.value)
//   userList.value = ''
  
//   nuevaLista.push(value)

//   ordernarLista(nuevaLista)

//   userLista.innerText = `${nuevaLista}`;
//   console.log(nuevaLista)
// }

// let mediana;

// const calcMediana = () => {

//   const mitadLista = parseInt(nuevaLista.length / 2)

//   if(esPar(nuevaLista.length)) {
//     const elemento1 = nuevaLista[mitadLista - 1]
//     const elemento2 = nuevaLista[mitadLista] 

//     const result = calcularPromedio([elemento1, elemento2])
//     console.log(result)
    

// } else {
//     mediana = nuevaLista[mitadLista]
//     console.log(mediana)
//   }
// }

// // ----------------------> Moda

// let nuevaLista = []

// const agregarValorLista = (event) => {
//   event.preventDefault()

//   const userList = document.getElementById("valorLista")
//   const value = Number(userList.value)
//   userList.value = ''
  
//   nuevaLista.push(value)

//   userLista.innerText = `${nuevaLista}`;
//   console.log(nuevaLista)
// }

// const calculoModa = () => {
//   const listaCount = {};

//   const cantidadNumeros = (n) => {
//     if (listaCount[n]) {  
//       listaCount[n] += 1
//     } else {
//       listaCount[n] = 1
//     }
//   }

//   nuevaLista.map(elemento => {
//     cantidadNumeros(elemento)
//   });

//   const listaArray = Object.entries(listaCount).sort((elementoA, elementoB) => elementoA[1] - elementoB[1])

//   const moda = listaArray[listaArray.length - 1]

//   console.log(moda)

//   userLista.innerText = `la moda de esta lista es de ${moda[0]} y se repite ${moda[1]} veces`;

// }


// // ----------------------> Armonica

// let nuevaLista = []

// const agregarValorLista = (event) => {
//   event.preventDefault()

//   const userList = document.getElementById("valorLista")
//   const value = Number(userList.value)
//   userList.value = ''
  
//   nuevaLista.push(value)

//   userLista.innerText = `${nuevaLista}`;
//   console.log(nuevaLista)
// }

// const calcArmonica = (lista) => {
//   const sumaList = lista.reduce(
//     (valorAcumulado, nuevoElemento) => valorAcumulado + (1 / nuevoElemento), 0
// );

// const mediaArmonica = lista.length / sumaList;
// return parseFloat(mediaArmonica.toFixed(3));
// } 

// const calculoArmonica = () => {
//   const result = calcArmonica(nuevaLista)


//   userLista.innerText = `la armónica de la lista es de ${result}`;
// }

// // ----------------------> Geometrica

// let nuevaLista = []

// const agregarValorLista = (event) => {
//   event.preventDefault()

//   const userList = document.getElementById("valorLista")
//   const value = Number(userList.value)
//   userList.value = ''
  
//   nuevaLista.push(value)

//   userLista.innerText = `${nuevaLista}`;
//   console.log(nuevaLista)
// }


// const calcularGeometrica = () => {
//   const productoElementos = nuevaLista.reduce(
//     (elementoAcumulado, elementoIterado) => { 
//     return elementoAcumulado * elementoIterado
//     }, 1
// )
//    const mediaGeometrica = productoElementos ** (1/nuevaLista.length);
//    return parseFloat(mediaGeometrica.toFixed(3));
// }

// const calculoGeometrica = () => {
//   const result = calcularGeometrica(nuevaLista)


//   userLista.innerText = `la geométrica de la lista es de ${result}`;
// }