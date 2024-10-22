let person = {
    firstName: "Evril",
    weight: 46,  
    height: 1.62,  
    calculateBMI: (function() {
        let bmi = person.weight / (person.height * person.height);
        let category = "";

        if (bmi < 16.0) {
            category = "Severely Underweight";
        } else if (bmi >= 16.0 && bmi <= 18.4) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            category = "Overweight";
        } else if (bmi >= 30.0 && bmi <= 34.9) {
            category = "Moderately Obese";
        } else if (bmi >= 35.0 && bmi <= 39.9) {
            category = "Severely Obese";
        } else if (bmi >= 40.0) {
            category = "Morbidly Obese";
        }

        console.log(`BMI: ${bmi.toFixed(1)}, Category: ${category}`);
        return { bmi: bmi.toFixed(1), category: category };
    })()
};
console.log(`Name: ${person.firstName}`);
