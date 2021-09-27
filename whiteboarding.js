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

console.log(metricToImperialHeight(176));
