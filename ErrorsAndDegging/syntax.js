const testingSyntax = () => {
  // syntax error: if you you forget to closing the paraenthesis or curly braces or square brackets or other things.
  console.log("I am in a testing syntax function");
  // // runtime Error
  console.log(x); // x is not defined
  let num = 10; 
  num(); // num is not a function

  // logical error
  let x = 2;
  if(x > 3){
    console.log("x is greater than 3");
  }else{
    throw new Error("x is not greater than 3");
  }
  }
module.exports = testingSyntax