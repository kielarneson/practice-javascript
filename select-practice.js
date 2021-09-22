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

// 4
numbers = [2, 4, 5, 1, 8, 9, 7];
var evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// 5
strings = ["a", "man", "a", "plan", "a", "canal", "panama"];
var lessThan4Letters = strings.filter((word) => word.length < 4);
console.log(lessThan4Letters);

// 6
var itemNameLessThan6Letters = items.filter((item) => item.name.length < 6);
console.log(itemNameLessThan6Letters);

// 7
numbers = [8, 23, 0, 44, 1980, 3];
var numbersLessThan10 = numbers.filter((number) => number < 10);
console.log(numbersLessThan10);

// 8
strings = ["big", "little", "good", "bad"];
var stringFirstLetterNotB = strings.filter((word) => word[0] !== "b");
console.log(stringFirstLetterNotB);
