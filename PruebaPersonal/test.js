const areaSalario = []


const porcentajeSalario = (salario, porcentaje) => (salario * porcentaje) / 100



const agregarObjeto = (event) => {
  event.preventDefault()

  // const salario = document.getElementById("salarioInput")
  // const valueSalario = Number(salario.value)

  const area = document.getElementById("basicos")
  const valueArea = String(area.value)

  const porcentaje = document.getElementById("ocio")
  const valuePorcentaje = Number(porcentaje.value)

  areaSalario.push({area: valueArea, porcentaje: valuePorcentaje})


  const mostrarValores = areaSalario.map(function(bar){
    return document.getElementById("listAreas").innerHTML = `area: ${bar.area} - El procentaje es: ${bar.porcentaje}`;
  })
  
  console.log(mostrarValores)
 
  console.log(areaSalario)

}

const testButton = () => {
  const valoresPorcentaje = areaSalario.map((name) => name.porcentaje)
  console.log(valoresPorcentaje)

  let suma = 0

  valoresPorcentaje.forEach (function(numero){suma = suma + numero})
  console.log(suma)

  if (suma === 100) {
    porcentajeSalario()
  } else {
    console.log("esos porcentajes estan mal distribuidos")
  }

}



