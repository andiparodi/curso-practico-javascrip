const salariosPersonas = []

salariosPersonas.push({
  nombre: "Camila",
  salario: 500,
});
salariosPersonas.push({
  nombre: "Nath",
  salario: 1500,
});
salariosPersonas.push({
  nombre: "Luisa",
  salario: 1800,
});
salariosPersonas.push({
  nombre: "Laura",
  salario: 1000,
});
salariosPersonas.push({
  nombre: "Daniela",
  salario: 2200,
});
salariosPersonas.push({
  nombre: "Esperancita",
  salario: 200,
});
salariosPersonas.push({
  nombre: "Carla",
  salario: 500,
});
salariosPersonas.push({
  nombre: "Antonieta",
  salario: 1500,
});
salariosPersonas.push({
  nombre: "Alicia",
  salario: 1300,
});
salariosPersonas.push({
  nombre: "Ana",
  salario: 2400,
});
salariosPersonas.push({
  nombre: "Julia",
  salario: 3400,
});
salariosPersonas.push({
  nombre: "Rosa",
  salario: 400,
});
salariosPersonas.push({
  nombre: "Angélica",
  salario: 400,
});
salariosPersonas.push({
  nombre: "Tatiana",
  salario: 400,
});
salariosPersonas.push({
  nombre: "Lorena",
  salario: 600,
});
salariosPersonas.push({
  nombre: "Carolina",
  salario: 1600,
});
salariosPersonas.push({
  nombre: "Fernanda",
  salario: 2600,
});
salariosPersonas.push({
  nombre: "Nora",
  salario: 1000,
});
salariosPersonas.push({
  nombre: "Gisselle",
  salario: 2000,
});
salariosPersonas.push({
  nombre: "Bill Gates",
  salario: 100000000,
});

// --------- analisis


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