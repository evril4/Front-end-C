//JavaScript Object
//Deklarasi Object
//Cara 1. Object Literal
// let john = {
//   firstName: "John",
//   age: 30,
//   isMarried: true,
//   grade: [80, 90, 100],
//   sayGreetings: function () {
//     console.log("Hello my name is " + this.firstName);
//   },
//   address: {
//     street: "Jl. Arnold Mononutu",
//     city: "Minahasa Utara",
//     province: "Sulawesi Utara",
//     postalCode: 95371,
//   },
// };
// console.log(john);
// // Cara 2. Kata kunci new
// let jane = new Object();
// (jane.firstName = "Jane"), (jane.age = 25), (jane.isMarried = false);

// console.log(jane);

// //Cara mengakses properti dalam object
// //1. Dot notation
// console.log(john.firstName); // John
// console.log(john.age); //30
// john.age = 31; //Ubah nilai
// console.log(john.age); //31
// john.job = "Teacher"; //Tambah property baru
// console.log(john);

// //2. Bracket notation
// console.log(john["isMarried"]); //true
// john["nationality"] = "Indonesia"; //Tambah properti baru
// console.log(john);

// //Object method
// john.sayGreetings(); //Hello my name is John

// //Object inside object
// console.log(john.address.city); //Minahasa Utara

// //Delete properti dalam object
// delete john.grade;
// console.log(john);

//JavaScript Conditional
// 1. if - else
let numbers = 10;
if (numbers % 2 === 0) {
  console.log("bilangan genap");
} else {
  console.log("bilangan ganjil");
}

// 2. if - else if

// 100 - 80 nilai A
// 60 - 80 nilai B
// < 60 nilai C

let nilai = 50;
if (nilai >= 80 && nilai <= 100) {
  console.log("Grade A");
} else if (nilai >= 60 && nilai < 80) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// Switch - case
let month = 10;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("Maret");
    break;
  default:
    console.log("Not found");
    break;
}