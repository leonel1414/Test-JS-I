// No cambies los nombres de las funciones.

const { returnStatement } = require("@babel/types");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
 
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(i = 0; i< array.length; i++){
    array[i] = array[i] + 1;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  if (!Array.isArray(numeros)) {
    throw new Error("El parámetro debe ser una matriz (array) de enteros");
  }
  let sum =0;
 for(i = 0; i<numeros.length; i++){
  
  sum+= numeros[i];
 }
 return sum;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  if (!Array.isArray(resultadosTest)) {
    throw new Error("El parámetro debe ser una matriz (array) de enteros");
  }

  if (resultadosTest.length === 0) {
    return 0; // Si la matriz está vacía, el promedio es 0 para evitar división por 0.
  }

  let suma = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    if (Number.isInteger(resultadosTest[i])) {
      suma += resultadosTest[i];
    }
  }

  const promedio = suma / resultadosTest.length;
  return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let max = 0;
  for( i = 0; i <numeros.length; i++){
    if(numeros[i]>max){
      max = numeros[i]
    }
  }
  return max;
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:
  let contador = 0;
  for(i = 0; i < arreglo.length; i++){
    if(arreglo[i]> 19){
      contador = contador+1;
    }
  }
  return contador;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
  if(numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";
  }else{
    return "Es dia Laboral";
  }
} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
 
  // Convertimos el número entero a cadena (string) para poder verificar el primer dígito.
  const numeroComoCadena = n.toString();

  // Verificamos si el primer dígito de la cadena es igual a "9".
  return numeroComoCadena.charAt(0) === "9";
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
  if (!Array.isArray(arreglo)) {
    throw new Error("El parámetro debe ser una matriz (array)");
  }

  if (arreglo.length === 0) {
    return true; // Si el arreglo está vacío, todos los elementos son iguales (caso trivial).
  }

  const primerElemento = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] !== primerElemento) {
      return false; // Si encontramos algún elemento distinto al primer elemento, no son todos iguales.
    }
  }

  return true;
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let mesesBuscados = ["Enero", "Marzo", "Noviembre"];
  let mesesEncontrados = [];

  for(i = 0; i< array.length; i++){
    if(mesesBuscados.includes(array[i])){
      mesesEncontrados.push(array[i]);
    }
  }

  if (mesesEncontrados.length === 3) {
    return mesesEncontrados;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
