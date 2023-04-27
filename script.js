// A function that takes in two numbers and a callback function
function multiplyNumbers(a, b, callback) {
    var c = a * b;
    callback(c);
  }
  
  // Call the function and pass in a callback function that logs the result
  multiplyNumbers(3, 4, (result)=> {
    console.log(result); // Output: 12
  });
  