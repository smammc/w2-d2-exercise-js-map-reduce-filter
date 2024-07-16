console.log("Ready to go! 🚀");

// -------------------
// .map() - Iteration 1
//
// Given an array of cities, return an array with the first letter of each city’s name capitalized
// -------------------

const cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris",
];

// -------------------
// .map() - Iteration 2
//
// Grade our students based on their performance on two projects (40% of final grade) and their final exam (60% of final grade)
// -------------------
const students = [
  {
    name: "Tony Parker",
    firstProject: 80,
    secondProject: 75,
    finalExam: 90,
  },
  {
    name: "Marc Barchini",
    firstProject: 84,
    secondProject: 65,
    finalExam: 65,
  },
  {
    name: "Claudia Lopez",
    firstProject: 45,
    secondProject: 95,
    finalExam: 99,
  },
  {
    name: "Alvaro Briattore",
    firstProject: 82,
    secondProject: 92,
    finalExam: 70,
  },
  {
    name: "Isabel Ortega",
    firstProject: 90,
    secondProject: 32,
    finalExam: 85,
  },
  {
    name: "Francisco Martinez",
    firstProject: 90,
    secondProject: 55,
    finalExam: 78,
  },
  {
    name: "Jorge Carrillo",
    firstProject: 83,
    secondProject: 77,
    finalExam: 90,
  },
  {
    name: "Miguel López",
    firstProject: 80,
    secondProject: 75,
    finalExam: 75,
  },
  {
    name: "Carolina Perez",
    firstProject: 85,
    secondProject: 72,
    finalExam: 67,
  },
  {
    name: "Ruben Pardo",
    firstProject: 89,
    secondProject: 72,
    finalExam: 65,
  },
];

// -------------------
// .reduce - Iteration 1
//
// Calculate the average amount of calories in the menu
// -------------------
const menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 },
];

// -------------------
// .filter - Iteration 1
//
// Given the following array, filter the ones who are older than 18 and thus eligible to drink
// -------------------
const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 20 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 },
  { name: "Jonas", age: 15 },
];

// -------------------
// .filter - Iteration 2
//
// Given the following arrays of properties, filter just the ones with a pool.
// -------------------
const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: "Private Room",
    pool: true,
    garage: false,
  },
  {
    title: "Private apartment",
    price: 190,
    type: "Entire Place",
    pool: true,
    garage: true,
  },
  {
    title: "Apartment with awesome views",
    price: 400,
    type: "Entire Place",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment in la Rambla",
    price: 150,
    type: "Private Room",
    pool: false,
    garage: true,
  },
  {
    title: "Comfortable place in Barcelona´s center",
    price: 390,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "Room near Sagrada Familia",
    price: 170,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Great house next to Camp Nou",
    price: 140,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "New apartment with 2 beds",
    price: 2000,
    type: "Entire place",
    pool: false,
    garage: true,
  },
  {
    title: "Awesome Suite",
    price: 230,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: "Entire place",
    pool: true,
    garage: true,
  },
];

// -------------------
// .filter - Iteration 3
//
// Given an array of numbers, filter out the ones that are not even and greater than 42.
// -------------------
const numbers = [1, 60, 112, 123, 100, 99, 73, 45];
