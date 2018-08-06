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
  }
  if (number % 2 == 1) {
    array.push(number);
  }
}

return array;
// Ejercicio 11
function computeSumOfAllElements(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

computeSumOfAllElements([1, 2, 3]);

module.exports = computeSumOfAllElements;

// Ejercicio 12

function computeSumBetween(num1, num2) {
  // your code here
  var suma = 0;
  for (var i = num1; i < num2; i++) {
    suma += i;
  }
  return suma;
}

module.exports = computeSumBetween;

// Ejercicio 13

function getLongestOfThreeWords(word1, word2, word3) {
  // your code here

  var longWord = word1;

  if (longWord.length < word2.length) {
    longWord = word2;
  }
  if (longWord.length < word3.length) {
    longWord = word3;
  }
  return longWord;
}

module.exports = getLongestOfThreeWords;

// ejercicio 14

function findShortestOfThreeWords(word1, word2, word3) {
  var shortWords = word1;

  if (shortWords.length > word2.length) {
    shortWords = word2;
  }
  if (shortWords.length > word3.length) {
    shortWords = word3;
  }
  return shortWords;
}

module.exports = findShortestOfThreeWords;

// ejercicio 15

function calculateBillTotal(preTaxAndTipAmount) {
  // your code here

  var tipTax =
    preTaxAndTipAmount + 0.15 * preTaxAndTipAmount + 0.095 * preTaxAndTipAmount;

  return tipTax;
}

module.exports = calculateBillTotal;
