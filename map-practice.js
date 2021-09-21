// // Map practice

// 1
var numbers = [1, 2, 3];
var numbersTimes3 = numbers.map((number) => number * 3);
console.log(numbersTimes3);

// 2
var strings = ["hello", "goodbye"];
var upperStrings = strings.map((word) => word.toUpperCase());
console.log(upperStrings);

// 3
var people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var peopleNames = people.map((person) => person.name);
console.log(peopleNames);

// 4
var plus7 = numbers.map((number) => number + 7);
console.log(plus7);

// 5
var stringLength = strings.map((word) => word.length);
console.log(stringLength);

// 6
var peopleAges = people.map((person) => person.age);
console.log(peopleAges);
