// // Select practice

// 1
var numbers = [2, 32, 80, 18, 12, 3];
var lessThan20 = numbers.filter((number) => number < 20);
console.log(lessThan20);

// 2
var strings = ["winner", "winner", "chicken", "dinner"];
var startsWithW = strings.filter((word) => word[0] === "w");
console.log(startsWithW);

// 3
var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var priceGreaterThan5 = items.filter((item) => item.price > 5);
console.log(priceGreaterThan5);
