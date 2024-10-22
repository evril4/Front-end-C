//DESTRUCTURING.

//Pelajari konsep destructuring dan buat contoh:
//1. Destructuring (Array & Object)
//Contoh pada Array:
// const fruits = ['apple', 'banana', 'orange'];
// const [firstFruit, secondFruit, thirdFruit] = fruits;
// console.log(firstFruit);  // 'apple'

//Contoh pada Object:
// const person = { name: 'Alice', age: 30, city: 'New York' };
// const { name, age } = person;
// console.log(name);  // 'Alice'

//2. Destructuring dengan mengambil sebagian item (Array & Object)
//Contoh pada Array
// const numbers = [1, 2, 3, 4, 5];
// const [first, , third] = numbers;
// console.log(third);  // 3

//Contoh pada Object
// const person = { name: 'Alice', age: 30, city: 'New York' };
// const { city } = person;
// console.log(city);  // 'New York'


//3. Destructuring dengan menggunakan default value (Array & Object)
//Contoh pada Array
// const numbers = [1, 2];
// const [first = 10, second = 20, third = 30] = numbers;
// console.log(third);  // 30

//Contoh pada Object
// const person = { name: 'Alice' };
// const { name, age = 25 } = person;
// console.log(age);  // 25

//4. Destructuring dengan menggunakan rest operator (Array & Object)
//Contoh pada Array
// const fruits = ['apple', 'banana', 'orange', 'grape'];
// const [firstFruit, ...restFruits] = fruits;
// console.log(restFruits);  // ['banana', 'orange', 'grape']

//Contoh pada Object
// const person = { name: 'Alice', age: 30, city: 'New York' };
// const { name, ...otherDetails } = person;
// console.log(otherDetails);  // { age: 30, city: 'New York' }

//Dengan menggunakan konsep destructuring coba anda cari di exercise6 bagian mana yang bisa diubah dengan destructuring.
//1. Pada Fungsi yearUntilRetirement 
//Kita bisa menggunakan destructuring untuk parameter birthYear:
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }, retirementAge = 60) => {
    const age = calculateAge(year);
    const retirement = retirementAge - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
};

yearUntilRetirement({ year: 1987, firstName: 'John' }); 
//Pada fungsi ini sudah ada destructuring object di parameternya { year, firstName }.

//2. Pada Fungsi addNumber
//Kita bisa menggunakan rest operator untuk mengambil semua argumen sebagai array:
const addNumber = (...numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return `The sum is ${sum}`;
};
  
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//3. Pada Fungsi calculateArea
// const calculateArea = ({ radius, power = 2 }, phi = 3.14) => {
//     return phi * Math.pow(radius, power);
// };

// let radius = 21;
// const area21 = calculateArea({ radius });

// radius = 7;
// const area7 = calculateArea({ radius });

// console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`); 

//destructuring pada array
// const [area21, area7] = [
//     calculateArea({ radius: 21 }),
//     calculateArea({ radius: 7 })
// ];

// console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

//Destructuring pada Nilai Radius
const radii = [21, 7];
const [area21, area7] = radii.map(radius => calculateArea({ radius }));

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

//4. Pada Fungsi makeAjaxRequest
//Kita bisa langsung destructure argumen method menggunakan default value
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(`Requesting ${url} with method ${method}`);
};
  
makeAjaxRequest('www.google.com');
//Sudah ada penggunaan default value pada method.
