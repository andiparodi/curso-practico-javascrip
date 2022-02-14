// ----------------------> Lista

function switchFormula () {
  const f = document.getElementById('formulaSelect').value;
  const btn = document.getElementById('btn-render');
  cleanError('form');
  switch (f) {
      case '1':
          btn.setAttribute('onclick', 'calculoPromedio()');
          btn.innerText = 'Calcular Media Aritmética'
          break;
      case '2':
          btn.setAttribute('onclick', 'calculoArmonica()');
          btn.innerText = 'Calcular Media Armonica'
          break;
      case '3':
          btn.setAttribute('onclick', 'calculoGeometrica();');
          btn.innerText = 'Calcular Media Geometrica'
          break;
      case '4':
          btn.setAttribute('onclick', 'calculoModa()');
          btn.innerText = 'Calcular Moda'
          break;
      case '5':
          btn.setAttribute('onclick', 'calcMediana();');
          btn.innerText = 'Calcular Mediana'
          break;
  }
}

let nuevaLista = []

const cleanError = (id) => {
  const errors = document.getElementById(id).querySelectorAll('.error');
  for (e of errors) {
      e.innerHTML = '';
  }
}

const renderList = (list) => {
  l = document.getElementById('userLista');
  l.innerHTML = '';

  list.forEach((element, index) => {
      const listElement = document.createElement('li');
      listElement.innerHTML = `<strong>${index + 1} -</strong> ${element}`;

      l.appendChild(listElement);
  });
}

const agregarValorLista = (event) => {
  cleanError('form')
  event.preventDefault()

  const userList = document.getElementById("valorLista")
  const value = Number(userList.value)
  userList.value = ''
  
  if (Number.isNaN(value) || value < 0) {
      e = document.getElementById('errorAddValue');
      e.innerHTML = 'Ingrese un valor válido para la lista de números';
      return false;
  }

  nuevaLista.push(value)
  renderList(nuevaLista)
}

const quitarValor = () => {
    cleanError('form')
    const element = document.getElementById('removeValue')
    let value = parseInt(element.value);
    element.value = ''

    if (Number.isNaN(value) || value <= 0) {
        e = document.getElementById('errorRemoveValue')
        e.innerHTML = 'Ingrese una posición válida de la lista de números'
        return false
    }

    value -= 1

    nuevaLista.splice(value, 1)
    renderList(nuevaLista)
}

// ----------------------> Promedio

let sumaLista = 0

const calcularPromedio = (lista) => {

  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) =>
     valorAcumulado + nuevoElemento)

  const promedioLista = sumaLista / lista.length
  return promedioLista
}



const calculoPromedio = () => {

  const userList = document.getElementById("valorLista")
  const value = userList.value
  userList.value = ''  

  const result = calcularPromedio(nuevaLista)
  
  resultCalc.innerText = `La media aritmética es de ${result}`
}

//----------------------> Armonica
const calcArmonica = (lista) => {
  const sumaList = lista.reduce(
    (valorAcumulado, nuevoElemento) => valorAcumulado + (1 / nuevoElemento), 0
);

const mediaArmonica = lista.length / sumaList;
return parseFloat(mediaArmonica.toFixed(3));
} 

const calculoArmonica = () => {
  const result = calcArmonica(nuevaLista)
  resultCalc.innerText = `La armónica de la lista es de ${result}`;
}

// ----------------------> Geometrica

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

  resultCalc.innerText = `la geométrica de la lista es de ${result}`;
}

// ----------------------> Mediana

const esPar = (n) => n % 2 === 0

const ordernarLista = (lista) => {
  function compareNumbers(a, b) {
    return a - b;
  }
  lista.sort(compareNumbers)
}

let mediana;

const calcMediana = () => {

  ordernarLista(nuevaLista)

  const mitadLista = parseInt(nuevaLista.length / 2)

  if(esPar(nuevaLista.length)) {
    const elemento1 = nuevaLista[mitadLista - 1]
    const elemento2 = nuevaLista[mitadLista] 

    const mediana = calcularPromedio([elemento1, elemento2])
    console.log(mediana)
    
    resultCalc.innerText = `La mediana es de ${mediana}`

  } else {
    const mediana = nuevaLista[mitadLista]
    resultCalc.innerText = `La mediana es de ${mediana}`    
  }
}

// // ----------------------> Moda

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

  resultCalc.innerText = `La moda en esta lista es de ${moda[0]}`;
}


