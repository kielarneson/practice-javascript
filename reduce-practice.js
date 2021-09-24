// Reduce practice

// 1
var numbers = [5, 10, 8, 3];
var addNumbers = numbers.reduce((sum, number) => (sum += number));
console.log(addNumbers);

// 2
var strings = ["volleyball", "basketball", "badminton"];
var addStrings = strings.reduce((finalString, word) => finalString + word);
console.log(addStrings);

// 3
var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var addPrice = items.map((item) => item.price).reduce((sum, current) => sum + current);
console.log(addPrice);