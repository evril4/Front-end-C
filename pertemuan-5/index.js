// //IIFE & Callback

// //1. IIFE (Immediately Invoked Function Expression)

// //No params & args & return value
// (function () {
//     console.log("Hello World");
// })();

// //With params & args & return value
// let output = (function (fullName){
//     return "Hello " + fullName;
// })("John Doe");

// console.log(output);

//Callback Function
//No params & args & return value
function sayHello(callback) {
    callback();
}

sayHello(function () {
    console.log("Hello Callback Function");
});

//With params & args & return value
function sayHello(callback) {
    //logic
    let output = callback("John Doe");
    return output;
}

let output = sayHello(function (fullName) {
    return "Hello " + fullName;
});

console.log(output);



