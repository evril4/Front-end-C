//Buatlah fungsi untuk menghitung BMI (Body Mass Index)
//Rumus: BMI = berat / (tinggi * tinggi),
//Berat dalam kg dan tinggi dalam meter
//170 cm = 1.7 m
//Fungsi tersebut menerima 2 parameter yaitu berat dan tinggi
//Dan mengembalikan output berupa BMI

function hitungBMI(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    return bmi;
}

let berat = 46; // berat dalam kilogram
let tinggi = 1.62; // tinggi dalam meter 

let hasilBMI = hitungBMI(berat, tinggi);
console.log(hasilBMI);
