//Funciones declaradas
/* se pueden utilizar antes de su definicion
  claridad en la estructura del codigo */

console.log(suma(2, 2));

function suma(num1, num2) {
  return num1 + num2;
}

// Funciones expresadas

//cuando se pasar como argumentos a otras funciones
//control de visilidad, se limita al contexto en la que se la define

let resta = function (num1, num2) {
  return num1 - num2;
};
console.log(resta(10, 5));

// Funciones flecha (Arrow Functions)

//proporciona una sintaxis mas concisa y corta,
//sin acceso a su propio this

let division = (num1, num2) => {
  return num1 / num2;
};
console.log(division(10, 2));
