const prompt = require("prompt-sync")({ sigint: true });

function suma(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}

function division(num1, num2) {
  if (num2 == 0) {
    return "No se puede dividir por 0";
  } else {
    let resultado = num1 / num2;
    return resultado;
  }
}

function resta(num1, num2) {
  let resultado = num1 - num2;
  return resultado;
}

function multiplicar(num1, num2) {
  let resultado = num1 * num2;
  return resultado;
}

console.log("Bienvenido a su calculadora digital");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicacion");
console.log("4. Division");
let opcion = parseInt(prompt("Indique que operacion desea realizar: "));
let num1;
let num2;
let resultado;

switch (opcion) {
  case 1:
    num1 = parseInt(prompt("Indique el primer valor a sumar: "));
    num2 = parseInt(prompt("Indique el segundo valor a sumar: "));
    resultado = suma(num1, num2);
    console.log("El resultado es: " + resultado);
    break;

  case 2:
    num1 = parseInt(prompt("Indique el primer valor a restar: "));
    num2 = parseInt(prompt("Indique el segundo valor a restar: "));
    resultado = resta(num1, num2);
    console.log("El resultado de la resta es: " + resultado);
    break;

  case 3:
    num1 = parseInt(prompt("Indique el primer valor a multiplicar: "));
    num2 = parseInt(prompt("Indique el segundo valor a multiplicar: "));
    resultado = multiplicar(num1, num2);
    console.log("El resultado de la multiplicacion es: " + resultado);
    break;

  case 4:
    num1 = parseInt(prompt("Indique el primer valor a dividir: "));
    num2 = parseInt(prompt("Indique el segundo valor a dividir: "));
    resultado = division(num1, num2);
    if (typeof resultado == "string") {
      console.log(resultado);
    } else {
      console.log("El resultado de la division es: " + resultado);
    }

    break;

  default:
    console.log("Opcion no valida");
    break;
}
