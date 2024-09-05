// var firstName = "Sunarso"
// var firstName = "Mustofa"

// console.log(firstName);

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple") + 1;

// const d = new Date();

// console.log(d);

// let resultAges = ages.find(function (el) {

//     return el > 9

// })

// let collectionNumber = [1, 2, 3, 4, 5, 6]

// let ganjil = collectionNumber.filter(function (el) {
//     return el % 2 === 1
// })

// console.log(ganjil);

const collectionNumber = [1, 2, 3, 4, 5, 6];

const kelipatan = collectionNumber.map(idx => idx * 3);
console.log(kelipatan);


const colors = ["blue", "black", "purple", "white", "pink"];
const tempColors = colors.filter(color => color.length > 4);
console.log(tempColors);