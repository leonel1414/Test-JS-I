'use strict'

function counter() {
  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // el primer valor deberia ser 1.
  // Vas a tener que usar closures.
  // ejemplo: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let contador = 0;
  return () => ++contador;
}

function cacheFunction(cb) {

   // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!

  
  // Creamos el objeto para almacenar los resultados en caché
  const cache = {};

  // Retornamos la función que acepta un solo argumento
  return function (arg) {
    // Verificamos si el resultado ya está en caché
    if (cache.hasOwnProperty(arg)) {
      // Si está en caché, lo retornamos directamente
      return cache[arg];
    } else {
      // Si no está en caché, invocamos a cb con el argumento dado
      const result = cb(arg);
      // Guardamos el resultado en caché
      cache[arg] = result;
      // Retornamos el resultado
      return result;
    }
  };
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};
