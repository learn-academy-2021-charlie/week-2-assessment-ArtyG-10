// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.split(""))

// a) Your answer:
//      ["C","h","a","r","l","i","e","","2","0","2","1"]
// b) Verify and explain:
//      I was correct. The .split built-in-method split the string into an array and the ("") parameter means that each letter in the string will be split.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer:
//      'hello, LEARN Student!'
// b) Verify and explain:
//      I was bamboozled because since the function did not have a return it just logged undefined.

// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer:
//      [8,10,12,14,16]
// b) Verify and explain:
//      I was correct. The .map built in method iterated through each value in the array and multiplied by 2.

// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer:
//      [12,14]
// b) Verify and explain:
//      My answer was correct because .filter only passed through the values which divided by 2 without any remainder.

// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn
console.log(learnStudent)

// a) Your answer:
//      Learn {student:"George", cohort:"Charlie", year:2021}
// b) Verify and explain:
//      My answer was correct. The variable learnStudent was assigned a new object based on the Learn class. The values in the class were copied into the new object.
