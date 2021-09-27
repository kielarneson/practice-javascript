// Converting players raw height to feet and inches
function heightToFeetAndInches(height) {
  var feet = Math.floor(height / 12.0);
  var inches = height % 12.0;

  if (inches === 0) {
    return { height: { feet: feet } };
  } else {
    return { height: { feet: feet, inches: inches } };
  }
}

console.log(heightToFeetAndInches(76));
