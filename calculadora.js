//Calculadora

function suma(num1, num2){
    let resultado = num1 + num2;
    return resultado;
}

let rdoSuma = suma(4,10);
console.log(rdoSuma);

function resta(num1, num2){
    let resultado = num1 - num2;
    return resultado;
}

let rdoResta = resta(4,10);
console.log(rdoResta);

function multiplicar(num1, num2){
    let resultado = num1 * num2;
    return resultado;
}

let rdoMultiplicar = multiplicar(4,10);
console.log(rdoMultiplicar);

function dividir(num1, num2){
  if(num2 == 0){
    return("No se puede dividir por 0");
  }else{
    return num1 / num2;
   }
  }


let rdoDividir = dividir(4,10);
console.log(rdoDividir);
