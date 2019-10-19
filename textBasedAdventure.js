// Game start
const readline1 = require('readline-sync')

let nameInput = readline1.question("Welcome to WWWD,\n(What Would these Women Do:)\nthe left swipe edition. \n\nPlease Enter your name: ")

console.log(`Hello. ${nameInput}! \n\nWelcome to my game.
\nWhat year were you born ?`) 
const readline2 = require('readline-sync')

 let yearInput = readline2.question("Please enter year:")

 let currentYear = 2019;
 let userAge = (currentYear - yearInput);

if (userAge >= 21 && userAge <= 45) { console.log("\nPlease Enjoy the Game. \n\nWWWD game rules are as followed: \n\nListed below are nine, left swipe situational questions with three diffrent narratives on how to tackle each situation. \nAt the end of the game, it will add up your answers to see which of the these three women personas you are more closely in aline with:                                   \nDr. Ruth,                      \nMichelle Obama or              \nKim Kardashian-West. \n\nLets begin!");

} else if (userAge < 21) {
  console.log("You are not permittted to play this game ! Please exit this game now.");
 
 } else {
  console.log("\nPlease be warned you may find this game not to your liking. \nProceed at your own risk, you have been warned. \n\nWWWD game rules are as followed: \n\nListed below are nine, left swipe situational questions with three diffrent narratives on how to tackle each situation. \nAt the end of the game, it will add up your answers to see which of the these three women personas you are more closely in aline with:                                   \nDr. Ruth,                      \nMichelle Obama or              \nKim Kardashian-West. \n\nLets begin!");
 }
 
 let arr = []; 

// sit. # 1
 const readline3 = require('readline-sync')

let sit1Input = readline3.question("\n\nWhen on a first date who sould pay ?\na) Who ever asked should pay.\nb) Go dutch, things don't workout no loss.\nc) The man should pay but talk about it before the date.\n\nPlease enter your answer: ")

// console.log(`You chose ${sit1Input}!`) 

arr.push(sit1Input);

//sit #2
 const readline4 = require('readline-sync')

let sit2Input = readline4.question("\n\nDating app or Not ?\na) Yes, but that depends on what you are looking for.\nb) You have a better chance meeting someone through a friend or a friend of a friend.\nc) In todays busy world it helps as long as you are smart about it.\n\nPlease enter your answer: ")

// console.log(`You chose ${sit2Input}!`) 

arr.push(sit2Input);

// sit #3
 const readline5 = require('readline-sync')

let sit3Input = readline5.question("\n\nWhat is more attractive to you in a mate ?(There is no wrong answer.)\na) Chemistry\nb) Humor\nc) Financial security\n\nPlease enter your answer: ")

// console.log(`You chose ${sit3Input}!`) 

arr.push(sit3Input);

// sit #4
 const readline6 = require('readline-sync')

let sit4Input = readline6.question("\nPlease Enter your answer: ")

// console.log(`You chose ${sit4Input}!`) 

arr.push(sit4Input);

// sit #5
 const readline7 = require('readline-sync')

let sit5Input = readline7.question("\nPlease Enter your answer: ")

// console.log(`You chose ${sit5Input}!`) 

arr.push(sit5Input);

// sit #6
 const readline8 = require('readline-sync')

let sit6Input = readline8.question("\nPlease Enter your answer: ")

// console.log(`You chose ${sit6Input}!`) 

arr.push(sit6Input);

// sit #7
 const readline9 = require('readline-sync')

let sit7Input = readline9.question("\nPlease Enter your answer: ")

// console.log(`You chose ${sit7Input}!`) 

arr.push(sit7Input);

// sit #8
 const readline10 = require('readline-sync')

let sit8Input = readline10.question("\nPlease Enter your answer: ")

// console.log(`You chose ${sit8Input}!`) 

arr.push(sit8Input);

// sit #9
 const readline11 = require('readline-sync')

let sit9Input = readline11.question("\nPlease Enter your answer: ")

// 

arr.push(sit9Input);

let ansStr = "";

let ctObj = {};

function charCount(arr, letter) {
let count = 0;
for(let i = 0; i < arr.length; i++) {
if(arr[i] === letter) {
count++;
}
}
return count;
}
for(let i = 0, l = arr.length; i < l; i++) {
  let curChar = arr[i];
  ctObj[curChar] = charCount(ansStr, curChar);
}
console.log(ctObj);
 
// if(a[i] === b[i] === c[i]) {
//  const readline12 = require('readline-sync')

// let sit10Input = readline12.question("\nPlease Enter your answer: ")

// console.log(`You chose ${sit10Input}!`) 

// arr.push(sit10Input); 

// } else if(a[i] === b[i] || b[i] === c[i] || a[i] === c[i]) {
//   const readline11 = require('readline-sync')

// let sit9Input = readline11.question("\nPlease Enter your answer: ")

// console.log(`You chose ${sit9Input}!`) 

// arr.push(sit9Input); 

// } else if(a[i] > b[i] && a[i] > c[i]) {
//   console.log("You are more similar to the Dr. Ruth personna.\n Thanks for playing!\n Try again.");
// } else if(b[i] > a[i] && b[i] >c[i]) {
//   console.log("You are more similar to the Michelle Obama personna.\n Thanks for playing!\n Try again.");
// } else {
//   console.log("You are more similar to the Kim Kardashian-West personna.\n Thanks for playing!\n Try again.")
// }

// {

// }