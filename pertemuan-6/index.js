//Array & Object
//1. Array
//Deklarasi variable array
//Cara 1. Array Literal
// let numbers = ["1, 2, 3, 4, 5"];
// console.log(numbers);
//Cara 2. Kata kumci new
// let numbers2 = new Array(6, 7, 8, 9, 10);
// console.log(numbers2);

//Tipe data dalam array
// let numbers = [1, 2, 3, 4, 5]; //numbers
// let students = ["John", "Jane", "Bob"]; //string
// let john = ["John", 30, true, 80, 90, 100]; //campuran
// console.log(john);

//Array length
// console.log(numbers.length);
// console.log(numbers.length);
// console.log(students.length);
// console.log(john.length);

// Mengakses elemen dalam array
// Melalui index. Index selalu dimulai dari 0
// console.log(numbers[2]);    //3
// console.log(students[1]);   //Jane
// console.log(john[3]);   //80, 90, 100
// console.log(john[3][1]);    //90

// Mengakses element terakhir dalam array
// let numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers[numbers.length - 1])

//Array Method
let array = [1, 2, 3, "hello", false, true];
console.log(array);
//1. toString()
console.log(array.toString());
//2. join()
console.log(array.join(" "));
console.log(array.join("-"));
//3. pop()
array.pop();
console.log(array);
//4. push()
array.push("Selamat pagi");
console.log(array);
//5. shift()
array.shift();
console.log(array);
//6. unshift()
array.shift();
console.log(array);
//7. splice()
array.splice(3, 0, 4, 5);
console.log(array);
//8. concat()
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);
//9. slice()
let sayuran = makanan.slice(3, 6);
console.log(sayuran);


