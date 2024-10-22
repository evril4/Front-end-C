//Array
let people = ["Greg", "Mary", "Devon", "James"];

// 1. Using a for-loop, iterate through this array and console.log all of the people.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// 2. Using forEach(), iterate through this array and console.log all of the people.
people.forEach(person => console.log(person));

// 3. Write the command to remove "Greg" from the array.
people.shift();
console.log(people); // ["Mary", "Devon", "James"]

// 4. Write the command to remove "James" from the array.
people.pop();
console.log(people); // ["Mary", "Devon"]

// 5. Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
console.log(people); // ["Matt", "Mary", "Devon"]

// 6. Write the command to add your name to the end of the array.
people.push("Your Name");
console.log(people); // ["Matt", "Mary", "Devon", "Your Name"]

// 7. Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}

// 8. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
let newPeople = people.slice(2); // ["Devon", "Your Name"]
console.log(newPeople);

// 9. Redefine the people variable with the value you started with. Using splice, remove "Devon" and add "Elizabeth" and "Artie".
people = ["Matt", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
people.push("Your Name"); // Adding your name back.
console.log(people); // ["Matt", "Mary", "Elizabeth", "Artie", "Your Name"]

// 10. Create a new variable called withBob and set it equal to the people array concatenated with "Bob".
let withBob = people.concat("Bob");
console.log(withBob); // ["Matt", "Mary", "Elizabeth", "Artie", "Your Name", "Bob"]


//Object
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1. Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log(programming.languages); // ["JavaScript", "Python", "Ruby", "Go"]

// 2. By using the bracket notation, change the difficulty to the value of 7.
programming["difficulty"] = 7;
console.log(programming.difficulty); // 7

// 3. Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming); // jokes key is removed

// 4. By using the dot notation, write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
console.log(programming.isFun); // true

// 5. Using a map(), iterate through the languages array and update each element to be “0 - JavaScript, 1 - Python, …”, where 0 represents the index of the array, and console.log the output.
programming.languages.map((language, index) => {
    console.log(`${index} - ${language}`);
});
