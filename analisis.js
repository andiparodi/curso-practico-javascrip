// Utils

const esPar = (n) => n % 2 === 0

const calcularPromedio = (lista) => {

  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) =>
     valorAcumulado + nuevoElemento)

  const promedioLista = sumaLista / lista.length
  return promedioLista
}

// Calculadora de medianas

const medianaSalarios = (lista) => {
  const mitad = parseInt(lista.length / 2)
  
  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1]
    const personaMitad2 = lista[mitad]

    const result = calcularPromedio([personaMitad1, personaMitad2])
    
    return result

    
  } else {
    const personaMitad = lista[mitad]
    
    return personaMitad
  }
}


// Mediana General

const salarios = salariosPersonas.map( (persona) => {
  return persona.salario
})

const salariosOrdenado = salarios.sort((salarioA, salarioB) => salarioA - salarioB)

const medianaGeneralSalarios = medianaSalarios(salariosOrdenado)

// Mediana del top 10%

const spliceStart = (salariosOrdenado.length * 90) / 100
const spliceCount = salariosOrdenado.length - spliceStart
console.log(salariosOrdenado)
console.log(spliceStart)
console.log(spliceCount)


const salariosTop10 = salariosOrdenado.splice(spliceStart, spliceCount)

console.log(salariosTop10)
console.log(medianaSalarios(salariosTop10))

const medianaTop10Salarios = medianaSalarios(salariosTop10)


console.log({medianaGeneralSalarios, medianaTop10Salarios})