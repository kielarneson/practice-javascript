// // Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// function printNumbersDivisibleByThree() {
//   var index = 1;
//   while (index <= 1000) {
//     if (index % 3 === 0) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }
// printNumbersDivisibleByThree();

// // Write a method that accepts an array of strings and prints out every other string.
// function printEveryOtherItem(strings) {
//   var index = 0;
//   strings.forEach(function (string) {
//     if (index % 2 === 0) {
//       console.log(string);
//     }
//     index += 1;
//   });
// }
// printEveryOtherItem(["a", "b", "c", "d", "e"]);

// // Write a method that accepts an array of numbers and returns the sum.
// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function (number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([2, 4, 5]));

// // Start with the hash: city_populations = {chi: 2700000}
// // Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// // The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// var cityPopulations = { chi: 2700000 };
// cityPopulations["nyc"] = 8400000;
// cityPopulations.sf = 800000; // same as cityPopulations["sf"]
// console.log(cityPopulations);

// // Write a method that prints out every number from 1 to 100.

// function oneTo100() {
//   var index = 1;
//   while (index <= 100) {
//     console.log(index);
//     index += 1;
//   }
// }

// oneTo100();

// // Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// function everyOtherTo100() {
//   var index = 1;
//   while (index < 100) {
//     console.log(index);
//     index += 2;
//   }
// }

// everyOtherTo100();

// // Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

// const numbers = [1, 5, 10, 55, 60, 70, 55];

// function numberCount(array) {
//   return array.filter((number) => number === 55).length;
// }

// console.log(numberCount(numbers));

// // Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
// // For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

// var strings = ["a", "b", "c", "d", "e"];

// function insertString(array) {
//   var index = 0;
//   while (index < array.length) {
//     if (index % 2 !== 0) {
//       array.splice(index, 0, "awesomesauce");
//     }
//     index += 1;
//   }
//   return array;
// }

// console.log(insertString(strings));

// // Start with the hash: item_amounts = {chair: 5, table: 2}
// // Someone just bought two chairs. Change the hash such that the chair amount is 3.
// // The final result should be: {chair: 3, table: 2}

// var itemAmounts = { chair: 5, table: 2 };
// // this
// itemAmounts["chair"] = 3;
// // or
// itemAmounts.chair = 3;
// console.log(itemAmounts);

// // Start with the hash: item_amounts = {chair: 5, table: 2}
// // You received 7 desks to sell. Change the hash to include desks.
// // The final result should be: {chair: 5, table: 2, desk: 7}

// var itemAmounts = { chair: 5, table: 2 };
// itemAmounts["desk"] = 7;
// console.log(itemAmounts);

// // Write a method that accepts a number and returns its factorial.
// // For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function factorial(number) {
//   var factorial = 1;
//   while (number > 0) {
//     factorial *= number;
//     number -= 1;
//   }
//   return factorial;
// }

// console.log(factorial(5));

// // Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
// // For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// var smallNumbers = [1, 5, 10];
// var largeNumbers = [100, 500, 1000];

// function mergeAdd(array1, array2) {
//   array1.forEach(function (number1) {
//     array2.forEach(function (number2) {
//       console.log(number1 + number2);
//     });
//   });
// }

// mergeAdd(smallNumbers, largeNumbers);

// Write a method that accepts an array of numbers, selects all numbers less than 10 and adds them together.
// For example, if the method receives [1, 3, 4, 8, 12, 20, 32], the method should return 16

const numbers = [1, 3, 4, 8, 12, 20, 32];

function specificSum(array) {
  return array.filter((number) => number < 10).reduce((numbers, sum) => numbers + sum);
}

console.log(specificSum(numbers));
