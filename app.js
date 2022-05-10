"use strict";

// 1) Turn an array of numbers into a total of all the numbers

// const sumArray = [1, 2, 3];

// function total(arr) {
//   const findTotal = arr.reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);

//   return findTotal;
// }

// console.log(total(sumArray)); // 6

// ----------------------------------------------

// 2) Turn an array of numbers into a long string of all those numbers.

// const numArray = [1, 2, 3];

// function stringConcat(arr) {
//   const stringArray = arr.reduce((acc, cur) => {
//     cur.toString();
//     acc.push(cur);

//     return acc;
//   }, []);

//   return stringArray.join("", ",");
// }
// console.log(stringConcat(numArray)); // "123"

// ------------------------------------------------

// 3) Turn an array of voter objects into a count of how many people voted

// var voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "Ed", age: 55, voted: true },
//   { name: "Tami", age: 54, voted: true },
//   { name: "Mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   { name: "Jeff", age: 30, voted: true },
//   { name: "Zack", age: 19, voted: false },
// ];

// function totalVotes(arr) {
//   const numOfVoters = arr.reduce((acc, cur) => {
//     if (cur.voted == true) {
//       acc.push(cur.name);
//     }

//     return acc;
//   }, []);

//   return numOfVoters.length;
// }

// console.log(totalVotes(voters));

// ------------------------------------------------------------------------------------

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// var wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 },
// ];

// function shoppingSpree(arr) {
//   const totalPrice = arr.reduce((acc, cur) => {
//     return (acc += cur.price);
//   }, 0);

//   return totalPrice;
// }

// console.log(shoppingSpree(wishlist)); // 227005

// ------------------------------------------------------------------------------------

// 5) Given an array of arrays, flatten them into a single array
// var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

// function flatten(arr) {
//   const combineArray = arr.reduce((acc, cur) => {
//     return acc.concat(cur);
//   }, []);

//   return combineArray;
// }

// // flatten(arrays);

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
