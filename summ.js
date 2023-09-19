// write a node program that takes in an unlimited number of command line arguments, 
// goes through each and prints out the sum of them. If any argument is not a whole number, skip it.
// Do support negative numbers though. If any argument is not a number, output an error message. We
// need at least 2 arguments. 

// get the arguments
const args = process.argv.slice(2);
console.log("args:", args);

// Ed case: We need at least 2 argyments.
if (args.length < 2) {
  console.log("Error, please enter at least 2 arguments");
  process.exit();
}
// create an accumulator for the sum
let total = 0;

// iterate through the command line args
// for off

for (let arg of args) {
  // Edge case: If any argument is not a whole number, skip it.

  const convertedNum = Number(arg);
  // Edge case: If any argument is not a number, output an error message.

  if (isNaN(convertedNum)) {
    console.log("Error, please enter numbers only");
    // stop the execution
    process.exit(); // explicit
  }
  if (Number.isInteger(convertedNum)) {
    total += convertedNum;
    console.log("args:", convertedNum, "total:", total);
  }
}


console.log("Total:", total);