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

const validacionTriangulo = (lado1, lado2, lado3) => {
  if (lado3 < (lado1 + lado2) && lado1 < (lado3+lado2) && lado2 < (lado3+lado1)) {
    return true
  } else {
    return "esas medidas no corresponden a un triángulo"
  }
}

const calcularAlturaIsosceles = (ladoA, ladoB, ladoC) => {
  if(ladoA === ladoB && ladoA != ladoC) {
    const h = Math.sqrt((ladoA ** 2) - (ladoC ** 2) / 4) ||
              Math.sqrt((ladoB ** 2) - (ladoC ** 2) / 4)
    return `La altura del triangulo isosceles es ${h.toFixed(2)}`
  } else if(ladoA === ladoC && ladoB != ladoC) {
     const h = Math.sqrt((ladoA ** 2) - (ladoB ** 2) / 4) ||
               Math.sqrt((ladoC ** 2) - (ladoB ** 2) / 4)
     return `La altura del triangulo isosceles es ${h.toFixed(2)}`
  } else if(ladoB === ladoC && ladoA != ladoB) {
      const h = Math.sqrt((ladoB ** 2) - (ladoA ** 2) / 4) ||
                Math.sqrt((ladoC ** 2) - (ladoA ** 2) / 4)
      return `La altura del triangulo isosceles es ${h.toFixed(2)}`
  } else {
    return "no es un triangulo Isosceles"
  }
}

const calculoIsosceles = (lado1, lado2, base) => {
  if (validacionTriangulo(lado1, lado2, base) == true) {
      return calcularAlturaIsosceles(lado1, lado2, base)
    } else {
    return validacionTriangulo(lado1, lado2, base)
  }
}

const calcularIsosceles = () => {
  const ladoA = document.getElementById("InputLadoA");
  const value1 = Number(ladoA.value);
  const ladoB = document.getElementById("InputLadoB");
  const value2 = Number(ladoB.value);
  const base = document.getElementById("InputBase");
  const value3 = Number(base.value);

  const isoscele = calculoIsosceles(value1, value2, value3)
  alert(isoscele)
}
