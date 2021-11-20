// forEach loop in JS does not allow break. This is the next best solution.
function linearSearch(array, number) {
  var answer = 0;

  for (var numberInArray of array) {
    if (numberInArray === number) {
      break;
    } else {
      answer++;
    }
  }
  return answer;
}

console.log(`Index: ${linearSearch([5, 3, 7, 12, 15, 17], 15)}`);

// JS .uniq
// Look into ... js method further. Seems REALLY powerful.
var arr = [1, "a", "kiel", 2, 2, 3, 33, 45, 4, 4, "arneson", true, false, true, 2, 2, 23, "kiel"];
var unique = [...new Set(arr)];

console.log(unique);
