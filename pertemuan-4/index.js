//JavaScript Function
//Cara 1.
// Tanpa input (parameter) dan output
// function greetings1() {
//   console.log("Hello World");
// }
// greetings1(); //Call function

// //Cara 2.
// let greetings2 = function () {
//   console.log("Hello World");
// };
// greetings2(); //Call function

//Parameter & Argument
//Dengan input dan output (return value)
//Cara 1
//                      Argument
// let output1 = greetings1("John Doe");
// console.log(output1);
// //                  parameter
// function greetings1(fullName) {
//   return "Hello " + fullName;
// }

// //Cara 2
// let greetings2 = function (fullName) {
//   return "Hello " + fullName;
// };
// let output2 = greetings2("John Doe");
// console.log(output2);

//Global, Local & Block Scope

let x = 10; //Global

function foo() {
  let y = 20; //Local (Function)
  let z = 30;
  console.log(x); // 10
  console.log(y); //20
  if (z > x) {
    let a = 40; //Local (Block)
    console.log(a); //40
  }
  console.log(a); //error
}

// console.log(y); //error
foo();

