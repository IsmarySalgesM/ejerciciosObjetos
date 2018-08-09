// Ejercicio #1
function addArrayProperty(obj, key, array) {
  obj.key = array;
  return obj;
}

module.exports = addArrayProperty;

// Ejercicio #2
const objectPropertiesCounter = obj => Object.keys(obj).length;

objectPropertiesCounter({ name: "John", lastname: "Doe" });

module.exports = objectPropertiesCounter;

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

function getElementOfArrayProperty(obj, key, index) {
  // your code here

if (obj.key === undefined){
return undefined;
  }
  
  if (!Array.isArray(obj.key)) {
    return undefined; 
}

var name = 0;

for(var i = 0; i < obj.length; i++){
    name = obj[i].key;
  
    }
      return obj.key[index];
  
}
  
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

// #Ejercicio 6

function transformFirstAndLast(array) {
  // your code here
  
  let firSec = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
  
  newObject = {};
  
  
  for (var i = 0; i < array.length; i++){
    newobject[array[0][i]] + array[i].pop();
    
    
  }
  return newObject;
}

module.exports = transformFirstAndLast;
// Ejercico 7


var name = 0;

for(var i = 0; i < obj.length; i++){
    name = obj[i].key;
    for( var j = 0; j < name.length; j++){
        
  }
    }
      return obj.key[index];
  }
  
module.exports = getElementOfArrayProperty;


// ejercicio 8 

function getAllKeys(obj) {
  // your code here
   var againArray = (Object.keys(obj));
  
  return againArray;
}

module.exports = getAllKeys;



// Ejercico 9 

function listAllValues(obj) {
  // your code here
  var arrNew = [];
  var arrKey = Object.keys(obj);

  for (let i = 0; i < arrKey.length; i ++) {
    arrNew.push(obj[arrKey[i]]);
  }

  return arrNew;
  
  
}
// Ejercicio 10

function transformFirstAndLast(array) {
  // your code here
  
  
  var newObject = {};
  
  

    newObject[array[0]] = array[array.length -1];
    
    
  
  return newObject;
}

module.exports = transformFirstAndLast;


// Ejercicio 11

  // your code here
 
  for( var i = 0; i < obj.length; i ++){
    fullName = obj[i].split(" ");
  }
 return fullName;
}

// Ejercico 12

const customerData = {
  Joe: {
    visits: 1,
  },
  Carol: {
    visits: 2,
  },
  Howard: {
    visits: 3,
  },
  Carrie: {
    visits: 4,
  },
};

function greetCustomer(firstName) {
  var  greeting = " ";
  // your code here
  
  if (customerData[firstName] === undefined) {
    greeting = "Welcome! Is this your first time?";
  } else if (customerData[firstName].visits == 1) {
    greeting ="Welcome back, " + firstName + "! We're glad you liked us the first time!";
    } else if (customerData[firstName].visits > 1) {
      greeting = "Welcome back, " + firstName + "! So glad to see you again!";
      }
    
      
    

  return greeting;

// Ejercico 13

function transformEmployeeData(array) {
  // your code here
  
  var arrayNew = [];
 
    
    
  for (var i = 0; i < array.length; i ++) {
     var objNew = {};
    
    for (var j = 0; j < array[i].length; j ++ ) {
      objNew[array[i][j][0]] = array[i][j][1];
    }
    arrayNew.push(objNew);
  }

  return arrayNew;

  
 }

 // Ejerccio 

 function convertObjectToList(obj) {
  // your code here
  
 var newArray = [];
  
 var valArr = Object.keys(obj);
  
  for( var i = 0; i < valArr.length; i ++){
    newArray.push([valArr[i],obj[valArr[i]]]);
  }
   return newArray;
}

module.exports = convertObjectToList;

// Ejercicio

function getSumOfAllElementsAtProperty(obj, key) {

  
  var suma = 0;
 

  if (!Array.isArray(obj[key])  || obj[key].length === 0 ) {
    return 0;       
  }
  
  for( var one in obj[key] ){
    suma += obj[key][one];
  }
   return suma;
}

module.exports = getSumOfAllElementsAtProperty;


// Ejercico 

function addObjectProperty(obj1, key, obj2) {
 
 
 obj1[key] = obj2;
 
  return obj1[key];
}

module.exports = addObjectProperty;


// Ejercicio

function addFullNameProperty(obj) {
  // your code here
  
 obj.fullName = obj.firstName + " " + obj.lastName;
 return obj.fullName;
}


module.exports = addFullNameProperty;

