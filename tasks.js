// First attempt at solution
setTimeout(function () {
  console.log("First task done!");
}, 2000);
setTimeout(function () {
  console.log("Second task done!");
}, 4000);
setTimeout(function () {
  console.log("Third task done!");
}, 6000);

// Peter's solution
setTimeout(function () {
  console.log("First task done!");
  setTimeout(function () {
    console.log("Second task done!");
    setTimeout(function () {
      console.log("Third task done!");
    }, 2000);
  }, 2000);
}, 2000);
