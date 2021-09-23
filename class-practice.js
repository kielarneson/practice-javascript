// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// 1
// const strings = ["a", "b", "c", "d", "e", "f"];

// function selectEvenItems(array) {
//   var result = [];
//   var index = 0;
//   array.forEach(function (letter) {
//     if (index % 2 === 0) {
//       result.push(letter);
//     }
//     index += 1;
//   });
//   return result;
// }

// console.log(selectEvenItems(strings));

// Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// 2
// function max(array) {
//   var currentMax = array[0];
//   array.forEach(function (number) {
//     if (number > currentMax) {
//       currentMax = number;
//     }
//   });
//   return currentMax;
// }
// console.log(max(numbers));

// Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// 3
// function factorial(number) {
//   var total = 1;
//   while (number > 0) {
//     total *= number;
//     number -= 1;
//   }
//   return total;
// }
// console.log(factorial(5));

// Write a method that accepts one argument - an array of numbers that are in ascending order.
// The method that returns a new array with the same values in descending order.
// However, do not use the "reverse" method built into Ruby.

// 4

// Second problem set
// 2
const strings = ["letters", "time", "hi"];

function smallestString(array) {
  var small = array[0];
  array.forEach(function (string) {
    if (string.length < small.length) {
      small = string;
    }
  });
  return small;
}

console.log(smallestString(strings));

// 4
var words = ["hi", "bye", "adam"];

function countA(array) {
  var count = 0;
  array.forEach(function (word) {
    if (word[0] === "a") {
      count += 1;
    }
  });
  return count;
}

console.log(countA(words));

// Solution 5
function join(array) {
  var result = "";
  array.forEach((word) => {
    result += word + ",";
  });
  return result;
}

console.log(join(["adam", "bill", "tom"]));

// Solution 6
function product(array) {
  var product = 1;
  array.forEach((number) => {
    product = product * number;
  });
  return product;
}

console.log(product([1, 2, 3]));

// Solution 8
function zero(array) {
  var count = 0;
  array.forEach((number) => {
    if (number === 0) {
      count++;
    }
  });
  return count;
}

console.log(zero([1, 4, 6, 8, 0]));
