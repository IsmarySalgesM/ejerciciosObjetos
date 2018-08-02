//Ejercico #3

let obj = {
  name: "Montana",
  age: 20,
  location: "Texas"
};
function removeStringValuesLongerThan(num, obj) {
  for (let key in obj) {
    if (obj[key].length > num) {
      delete obj[key];
    }
  }
}
removeStringValuesLongerThan(6, obj);

// Ejercicio #4

//Escribir una función llamada "getAllKeys" que devuelve un array de todas las claves del objeto de entrada.
//Ejemplo de entrada:
//(({
////  name: 'Sam',
//  age: 25,
//  hasPets: true
//}
//Valor de retorno de la función (salida):

//['name', 'age', 'hasPets']

function getAllKeys(obj) {
  object.keys(obj);
}

module.exports = getAllKeys;

//Ejercico #5

function fromListToObject(array) {
  // your code here

  let arToObject = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
  //            (0,0)   (0,1)     (1,0)     (1,1)       (2,0)  (2,1)
  let newObject = {};

  for (var i = 0; i < array.length; i++) {
    newObject[array[i][0]] = array[i][1];
  }
  return newObject;
}

module.exports = fromListToObject;
