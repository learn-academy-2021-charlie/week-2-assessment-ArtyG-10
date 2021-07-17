// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// var num1 = 15
// // Expected output: "15 is divisible by three"
//
// var num2 = 0
// // Expected output: "0 is divisible by three"
//
// var num3 = -7
// // Expected output: "-7 is not divisible by three"
// b) Create the function that makes the test pass.


//I start my test with describe() and then the function name as a string
describe("divByThree",()=>{
//Declare my test variables
  let num1 = 15
  let num2 = 0
  let num3 = -7
//next use it() and describe what the function is supposed to do
  it("tells you if a number is divisable by three",()=>{
//Write my expect().toEqual() statements, one for every test variable
    expect(divByThree(num1)).toEqual(`${num1} is divisible by three`)
    expect(divByThree(num2)).toEqual(`${num2} is divisible by three`)
    expect(divByThree(num3)).toEqual(`${num3} is not divisible by three`)
  })
})
//Fist I create a function called divByThree which takes a number as an argument
const divByThree = (number) => {
//I start with an if statement which uses modulo of 3 to see if it is evenly divisible.
  if (number%3===0){
//If it checks correct I use a string interpolation to return a statement that the argument was divisible by 3
    return `${number} is divisible by three`
  }
//In every other case it would return a string interpolation that it was not divisible.
  else return `${number} is not divisible by three`
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// //
// var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
// b) Create the function that makes the test pass.



//Start my test with describe() and then the function name as a string
describe("capitalizeArray",()=>{
//Declare my test variables
  let randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
  let randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
//next use it() and describe what the function is supposed to do
  it("takes in array of words and returns array with all words capitalized",()=>{
//Write my expect().toEqual() statements, one for each test variable
    expect(capitalizeArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalizeArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})
//declare a function called capitalizeArray that takes in an array
const capitalizeArray = (array) => {
//.map the array and .toUpperCase the [0] index of each value
  return array.map(value => {
//Had to google how to add the rest of the string back to the uppercased first letter
    return value[0].toUpperCase() + value.substring(1)})
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// var vowelTester1 = "learn"
// // // Expected output: 1
// var vowelTester2 = "academy"
// // // Expected output: 0
// var vowelTester3 = "challenge"
// // // Expected output: 2
// b) Create the function that makes the test pass.


//Start my test with describe() and then the function name as a string
describe("indexOfFirstVowel",()=>{
//declare my test variables
  let vowelTester1 = "learn"
  let vowelTester2 = "academy"
  let vowelTester3 = "challenge"
//next use it() and describe what the function is supposed to do
  it("takes in a string and logs the index of the first vowel", () => {
//Write my expect().toEqual() statements, one for each test variable
    expect(indexOfFirstVowel(vowelTester1)).toEqual(1)
    expect(indexOfFirstVowel(vowelTester2)).toEqual(0)
    expect(indexOfFirstVowel(vowelTester3)).toEqual(2)
  })
})
//Fist I create a function called indexOfFirstVowel which takes a string as an argument
const indexOfFirstVowel = (string) => {
//I need to declare a variable for a vowels list that I will use to check the string with
  var vowelList = "aeiouAEIOU"
//I need to iterate through my string. I can use a simple for loop.
  for (let i=0; i<string.length; i++){
//I need to set up a conditional that iterates until it finds a character in the string which can be found in my vowel list at which point i can just return the current i value.
    if (vowelList.indexOf(string[i]) !== -1){
      return i}
    }
}
