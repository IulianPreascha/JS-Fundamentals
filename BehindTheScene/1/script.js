'use strict';

// function calcAge(birthyear) {
//   const age = 2037 - birthyear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthyear}`;
//     console.log(output);

//     if (birthyear >= 1981 && birthyear <= 1996) {
//       var millenial = true;
//       // Creating new variable with same name as outer scope's variable
//       const firstName = 'Steven';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       // Reassigning outer scope's variable
//       output = 'NEW OUTPUT';
//     }
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

//! Hoisting and TDZ in Practice

//! Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//! Functions
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArow = (a, b) => a + b;
