// yearUntilRetirement.js
import { calculateAge } from './calculateAge.js';

export const yearUntilRetirement = ({ year, firstName }, retirementAge = 60) => {
    const age = calculateAge(year);
    const retirement = retirementAge - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
};