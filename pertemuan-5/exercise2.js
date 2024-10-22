//Ubah exercise 1 dari function biasa menjadi
//IIFE dan callback

let hasilBMI = (function(berat, tinggi) {
    return berat / (tinggi * tinggi);
})(46, 1.62);

console.log(hasilBMI);

function hitungBMI(berat, tinggi, callback) {
    let bmi = berat / (tinggi * tinggi);
    callback(bmi);
}

let berat = 46;
let tinggi = 1.62;

hitungBMI(berat, tinggi, function(bmi) {
    console.log(bmi);
});