// String Literals, Arrow Function, Default Parameter

// 1. String Literals
let fullName = "John Doe";
let age = 33;
let address = "Manado";

// Halo nama saya John Doe, umur saya 33 tahun dan saya
// tinggal di Manado.

let kalimat =
  "Halo nama saya " +
  fullName +
  ", umur saya " +
  age +
  " tahun dan saya tinggal di " +
  address +
  ".";
console.log(kalimat);

let kalimat2 = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}.`;
console.log(kalimat2);

// 2. Arrow Function

function sayGreetings(fullName) {
  return `Hello ${fullName}`;
}

console.log(sayGreetings("John Doe"));

// const sayGreetings2 = (fullName) => {
//   return `Hello ${fullName}`;
// };

// console.log(sayGreetings2("John Doe"));

//Implicit return value
const sayGreetings2 = (fullName) => `Hello ${fullName}`;

// Arrow Function pada IIFE
let output1 = (() => `Hello`)();
console.log(output1);

// Arrow Function pada Callback
let numbers = [1, 2, 3, 4, 5];
let ouput2 = numbers.map((item) => item);

// 3. Default Parameter
const sayGreetings3 = (fullName, age, address) => {
  if (fullName === undefined) {
    fullName = "John Doe";
  }
  if (age === undefined) {
    age = 30;
  }
  if (address === undefined) {
    address = "Manado";
  }
  console.log(`Halo nama saya ${fullName} umur saya ${age} tahun`);
};

sayGreetings3();

const sayGreetings4 = (fullName = "John Doe", age = 30, address = "Manado") => {
  console.log(
    `Halo nama saya ${fullName} umur saya ${age} tahun, dan saya tinggal di ${address}`
  );
};

sayGreetings4("Stenly", 37, "Unklab");