//Ubahlah syntax ES5 berikut ke dalam ES6

//1.
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

//2
const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return `The sum is ${sum}`;
};
  
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//3
const phi = 3.14;

const calculateArea = ({ radius, power = 2 }) => phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({ radius });

radius = 7;
const area7 = calculateArea({ radius });

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

//4
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(`Requesting ${url} with method $ {method}`);
};
  
makeAjaxRequest('www.google.com');