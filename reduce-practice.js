// Reduce practice

// 1
var numbers = [5, 10, 8, 3];
var addNumbers = numbers.reduce((sum, number) => (sum += number));
console.log(addNumbers);

// 2
var strings = ["volleyball", "basketball", "badminton"];
var addStrings = strings.reduce((finalString, word) => finalString + word);
console.log(addStrings);
