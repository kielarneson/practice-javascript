// // Map practice

// 1
var numbers = [1, 2, 3];
var numbersTimes3 = numbers.map((number) => number * 3);
console.log(numbersTimes3);

// 2
var people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var peopleNames = people.map((person) => person.name);
console.log(peopleNames);

// 3
var plus7 = numbers.map((number) => number + 7);
console.log(plus7);
