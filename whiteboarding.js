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
