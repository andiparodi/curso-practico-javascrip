const porcentajeSalario = (salario, porcentaje) => (salario * porcentaje) / 100



const calculoPagate = (event) => {
  event.preventDefault()

  const salario = document.getElementById("salarioInput")
  const valueSalario = Number(salario.value)
  
  const basicos = document.getElementById("basicos")
  const valueBasicos = Number(basicos.value)

  const ocio = document.getElementById("ocio")
  const valueOcio = Number(ocio.value)

  const educacion = document.getElementById("educacion")
  const valueEducacion = Number(educacion.value)

  const inversiones = document.getElementById("inversiones")
  const valueInversiones = Number(inversiones.value)

  const ahorro = document.getElementById("ahorro")
  const valueAhorro = Number(ahorro.value)
  

  const calculoBasicos = porcentajeSalario(valueSalario, valueBasicos)
  const calculoOcio = porcentajeSalario(valueSalario, valueOcio)
  const calculoEducacion = porcentajeSalario(valueSalario, valueEducacion)
  const calculoInversiones = porcentajeSalario(valueSalario, valueInversiones)
  const calculoAhorro = porcentajeSalario(valueSalario, valueAhorro)
  
  console.log(calculoBasicos, calculoOcio, calculoEducacion, calculoInversiones, calculoAhorro)

  if (valueBasicos + valueOcio + valueEducacion + valueInversiones + valueAhorro === 100) {
    valorBasicos.innerText = `El presupuesto para este área es de: ${calculoBasicos}`;
    valorOcio.innerText = `El presupuesto para este área es de: ${calculoOcio}`;
    valorEducacion.innerText = `El presupuesto para este área es de: ${calculoEducacion}`;
    valorInversiones.innerText = `El presupuesto para este área es de: ${calculoInversiones}`;
    valorAhorro.innerText = `El presupuesto para este área es de: ${calculoAhorro}`;
  } else {
    
    alert("esos valores no son correctos")

    valorBasicos.innerText = "";
    valorOcio.innerText = ""
    valorEducacion.innerText = ""
    valorInversiones.innerText = ""
    valorAhorro.innerText = ""
    
    salario.value = ''
    basicos.value = ''
    ocio.value = ''
    educacion.value = ''
    inversiones.value = ''
    ahorro.value = ''
  }
  
}