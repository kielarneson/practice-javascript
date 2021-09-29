// Converting players raw height to feet and inches
function heightToFeetAndInches(height) {
  var feet = height / 12.0;
  feet = Math.floor(feet);
  var inches = height % 12.0;

  if (inches === 0) {
    return { height: { feet: feet } };
  } else if (feet < 1) {
    return { height: { inches: inches } };
  } else {
    return { height: { feet: feet, inches: inches } };
  }
}

console.log(heightToFeetAndInches(76));
console.log(heightToFeetAndInches(61));
console.log(heightToFeetAndInches(33));
console.log(heightToFeetAndInches(10));

// Converting metric to imperial for height
function metricToImperialHeight(heightInCentimeters) {
  var imperialHeight = Math.round(heightInCentimeters * 0.3937);
  var feet = Math.floor(imperialHeight / 12.0);
  var inches = imperialHeight % 12.0;

  if (inches === 0) {
    return { height: { feet: feet } };
  } else if (feet < 1) {
    return { height: { inches: inches } };
  } else {
    return { height: { feet: feet, inches: inches } };
  }
}

var height1 = metricToImperialHeight(176);
var height2 = metricToImperialHeight(199);
var height3 = metricToImperialHeight(91);
var height4 = metricToImperialHeight(9);

var heights = [height1, height2, height3, height4];

// Finding average of all heights in heights array
function heightAverage(array) {
  var index = 0;
  var sum = 0;

  while (index < array.length) {
    if (array[index].height.feet === undefined) {
      sum += array[index].height.inches;
    } else if (array[index].height.inches === undefined) {
      sum += array[index].height.feet * 12;
    } else {
      sum += array[index].height.feet * 12 + array[index].height.inches;
    }
    index++;
  }
  var average = sum / array.length;
  var averageFeet = Math.floor(average / 12.0);
  var averageInches = Math.round(average % 12.0);

  return { feet: averageFeet, inches: averageInches };
}

console.log(heightAverage(heights));

/* 
Higher order function example

let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);

Turn the above code into 2 separate functions where one function calls 
upon the other in order to derive the desired output.
This is an example of a higher order function 
*/

function range(start, end) {
  var range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}

function sum(range) {
  var sum = 0;
  range.forEach((number) => (sum += number));
  return sum;
}

console.log(sum(range(1, 10)));

//

/* 
FizzBuzz test

Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz”
instead of the number and for the multiples of five print “Buzz”. For numbers which are
multiples of both three and five print “FizzBuzz".

Write this as a higher order function
*/

var index = 1;

while (index <= 100) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log("FizzBuzz");
    index += 1;
  } else if (index % 3 === 0) {
    console.log("Fizz");
    index += 1;
  } else if (index % 5 === 0) {
    console.log("Buzz");
    index += 1;
  } else {
    console.log(index);
    index += 1;
  }
}

// Longest string in an array

var words = ["apple", "telephone", "ant", "reptile"];

function longestWord(array) {
  var longestWord = array[0];

  array.forEach(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

console.log(longestWord(words));

// Most commonly used character in a string

function mostUsed(string) {
  var splitString = string.split("");
  var letterFrequencies = {};
  var index = 0;

  while (index < splitString.length) {
    if (letterFrequencies[splitString[index]] === undefined) {
      letterFrequencies[splitString[index]] = 0;
    }
    letterFrequencies[splitString[index]] += 1;
    index += 1;
  }
  return letterFrequencies;
}

function getSortedHash(inputHash) {
  var resultHash = {};

  var keys = Object.keys(inputHash);
  keys
    .sort(function (a, b) {
      return inputHash[a] - inputHash[b];
    })
    .reverse()
    .forEach(function (k) {
      resultHash[k] = inputHash[k];
    });
  return resultHash;
}

console.log(getSortedHash(mostUsed("cheesecake")));
