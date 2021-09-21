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

// 7
var dividedBy2 = numbers.map((number) => number / 2.0);
console.log(dividedBy2);

// 8
var firstLetter = strings.map((word) => word[0]);
console.log(firstLetter);

// 9
var peopleAgesTimes2 = people.map((person) => person.age * 2);
console.log(peopleAgesTimes2);

// 10
var numberToString = numbers.map((number) => number.toString());
console.log(numberToString);
