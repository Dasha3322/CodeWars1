// Задача 1 Make a simple function called greet that returns the most-famous "hello world!".
// function greet() {
//     return "hello world!";
//   }


// Задача 2 Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number. For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
// Constraint: 1 <= month <= 12

// const quarterOf = (month) => {
//     if (month <= 3) {
//     return 1
//     } else if (6 >= month && month > 3) {
//       return 2
//     } else if (9 >= month && month > 6) {
//       return 3
//     } else if (12 >= month && month > 9) {
//       return 4
//     }
//   }

// Задача 3 Perimeter sequence. The first three stages of a sequence are shown. The blocksize is a by a and a ≥ 1. What is the perimeter of the nth shape in the sequence (n ≥ 1) ?

// function perimeterSequence(a,n) {
//     return a * n * 4;
// }

// Задача 4 Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
// Examples:
// 1: -1
// 14: -14
// -34: 34

// function opposite(number) {
//     return(-number);
// }

// Задача 5 It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

// function removeChar(str){
//     str1 = str.split('');
//     str1.shift();
//     str1.pop();
//     return str1.join('');      
// }