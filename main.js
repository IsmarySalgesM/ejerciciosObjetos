// ejercicio 1
function computeAverageLengthOfWords(word1, word2) {
  let colors = (word1.length + word2.length) / 2;
  return colors;
}

module.exports = computeAverageLengthOfWords;
// Ejercicio 2

function getNthElement(array, n) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[n];
  }
}
module.exports = getNthElement;

// Ejercicio 3

function convertDoubleSpaceToSingle(str) {
  var arrayCadenas = str.split("  ");
  return arrayCadenas.join(" ");
}

module.exports = convertDoubleSpaceToSingle;
// Ejercico #4

function findPairForSum(array, number) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[i] + array[j] == number) {
        arrayNew = [array[i], array[j]];
      }
    }
  }

  return arrayNew;
}
// ejercicio #5

function computeSumOfAllElements(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

computeSumOfAllElements([1, 2, 3]);

module.exports = computeSumOfAllElements;

// Ejercicio 6

function filterOddElements(arr) {
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    if (number % 2 == 1) {
      array.push(number);
    }
  }

  return array;
}
