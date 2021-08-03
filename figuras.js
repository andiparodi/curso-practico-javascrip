//código del cuadrado

const perimetroCuadrado = (lado) => lado * 4;

const areaCuadrado = (lado) => lado ** 2;

//código del triángulo 

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

const areaTriangulo = (base, altura) => (base * altura) / 2;

//código círculo

const PI = Math.PI;

const diametro = (radio) => radio * 2;

const circunsferencia = (radio) => diametro(radio) * PI;

const areaCirculo = (radio) => (radio ** 2) * PI;


// Aquí interactuamos con el html

// Cuadrado

const calcularPerimetroCuadrado = () => {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro)
}

const calcularAreaCuadrado = () => {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area)
}

// Triángulo

const calcularPerimetroTriangulo = () => {
  const ladoA = document.getElementById("InputLadoA");
  const value1 = Number(ladoA.value);
  const ladoB = document.getElementById("InputLadoB");
  const value2 = Number(ladoB.value);
  const base = document.getElementById("InputBase");
  const value3 = Number(base.value);
  const altura = document.getElementById("InputBase");
  const value4 = Number(altura.value);
  

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro)
}

const calcularAreaTriangulo = () => {
  const base = document.getElementById("InputBase");
  const value3 = Number(base.value);
  const altura = document.getElementById("InputAltura");
  const value4 = Number(altura.value);
  

  const area = areaTriangulo(value3, value4);
  alert(area)
}

// Circulo

const calcularCircunsferencia = () => {
  const input = document.getElementById("InputCirculo");
  const value =  input.value;

  const perimetro = circunsferencia(value);
  alert(perimetro)
}

const calcularAreaCirculo = () => {
  const input = document.getElementById("InputCirculo");
  const value =  input.value;

  const area = areaCirculo(value);
  alert(area)
}

const calcularDiametro = () => {
  const input = document.getElementById("InputCirculo");
  const value =  input.value;

  const diametr = diametro(value);
  alert(diametr)
}



// Isosceles

const calcularAltura = (ladoA, ladoB) => {
  const h = Math.sqrt((ladoA ** 2) - (ladoB ** 2) / 4)
  return h
}

const isosceles = (lado1, lado2, base) => {
  if (base < (lado1 + lado2) && lado1 < (base+lado2) && lado2 < (base+lado1)) {
    if(lado1 === lado2 && lado1 != base){
      return calcularAltura(lado1, base).toFixed(2)
    } else {
    return "Lo siento, no es un triangulo Isosceles"
    }
  } else {
  return "Lo siento, esas medidas no corresponden a un triangulo"
  }
}


const calcularIsosceles = () => {
  const ladoA = document.getElementById("InputLadoA");
  const value1 = Number(ladoA.value);
  const ladoB = document.getElementById("InputLadoB");
  const value2 = Number(ladoB.value);
  const base = document.getElementById("InputBase");
  const value3 = Number(base.value);

  const isoscele = isosceles(value1, value2, value3)
  alert(isoscele)
}
