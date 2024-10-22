//exercise8.js
import { yearUntilRetirement } from './yearUntilRetirement.js';
import { addNumber } from './addNumber.js';
import { calculateArea } from './calculateArea.js';
import { makeAjaxRequest } from './makeAjaxRequest.js';

// Test for yearUntilRetirement
yearUntilRetirement({ year: 1987, firstName: 'John' });

// Test for addNumber
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// Test for calculateArea
let radius = 21;
const area21 = calculateArea({ radius });

radius = 7;
const area7 = calculateArea({ radius });

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// Test for makeAjaxRequest
makeAjaxRequest('www.google.com');