'use strict';

// function calAge(birthdayYear) {
//   const age = 2023 - birthdayYear;
//   //   console.log(fName);
//   function printAge() {
//     const output = `You are ${age} , born in ${birthdayYear}`;
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const fName = 'Nguyen';
// calAge(1999);

// console.log(!numProducts);

// if (!numProducts) {
//   deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('Deleted!');
// }

// const jessica = {
//   fName: 'Jessica',
//   lName: 'Walls',
// };
// const jessicaMarried = jessica;
// jessicaMarried.lName = 'John';
// console.log(jessica, jessicaMarried);
// // đã bị chỉnh sửa cả 2
// //{ fName: 'Jessica', lName: 'John' } { fName: 'Jessica', lName: 'John' }

const jessica = {
  fName: 'Jessica',
  lName: 'Walls',
  family: ['Meal', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lName = 'John';
jessicaCopy.family.push('a');

console.log(jessica);
console.log(jessicaCopy);
//{ fName: 'Jessica', lName: 'Walls' } { fName: 'Jessica', lName: 'John' }
