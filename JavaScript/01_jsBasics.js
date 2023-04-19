/* 

Today's topics to cover
A) Variables
B) Datatypes (also tell type of)
C) Operators
D) Conditionals (If, If-else, If-else-if ladder, switch)
E) alerts and prompts
F) Type Coercion
G) Template literals
H) Ternary Operator
I) Arrays 
J) Loops (for, while, do-while)

*/

// // Shree Ganesha Code of every coding Language
// console.log("Hello world!!");

// // A. Variables and B. Datatypes in JS

// let age = 67; //Number
// console.log(age);
// let fname = "Kunal"; //String
// console.log(fname);
// let isMarried = false; //Boolean
// console.log(isMarried);
// console.log(typeof isMarried);

// // C. Operators in JS

// // 1. Assignment Operator =
// let xyz = "Random string";

// // 2. Arithmetic Operators
// let add = 4 + 6; // Addition / Concatnation
// let sub = 10 - 6; // Subtraction
// let mul = 10 * 6; // Multiplication
// let div = 10 / 6; // Division
// let rem = 17 % 5; // Modulo (gives back remainder)

// // 3. Comparison Operator <, >, <=, >=, ==
// let check = 5 >= 2;

// // 4. Logical operators &&,||, !, ++, --
// let checkBoth = 5 > 4 && 8 < 12; // set true only when both operands are true

// // Example 1

// let marks1 = 15;
// let marks2 = 75;
// let marks3 = 80;

// let sum = marks1 + marks2 + marks3;
// console.log(sum);

// let avg = sum / 3;
// console.log(avg);

// // D. Conditional statements

// // 1. If condition
// if (avg > 80) {
//   console.log("Pass");
// }

// // 2. If-else condition
// if (avg >= 70) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }

// // 3. If-elseif ladder
// if (avg >= 90) {
//   console.log("Grade A");
// } else if (avg >= 80 && avg < 90) {
//   console.log("grade B");
// } else if (avg >= 70 && avg < 80) {
//   console.log("Grade C");
// } else {
//   console.log("Grade D");
// }

// // 4. Nested If-else condition

// // E. Example 2 - Using Prompts and Alerts
// let user1 = prompt("Enter your marks for science exam");
// // F. Type Coercion
// let userNum1 = Number(user1);
// console.log(userNum1);
// let user2 = prompt("Enter your marks for maths exam");
// let userNum2 = Number(user2);
// console.log(userNum2);

// // G. Template Literals `${}`
// let summ = userNum1 + userNum2;
// console.log("My total marks are ", summ);
// // Using Template Literals
// console.log(`My total marks are ${summ}`);

// // Example 3
// let sum1 = 105;
// let sum2 = 175;
// console.log("My science marks are ", sum1, " and maths marks are ", sum2);
// // Using Template Literals
// console.log(`My science marks are ${sum1} and maths marks are ${sum2}`);

// // H. Ternary operator -> (condition) ? Truthsy block : Falsy block;
// let avgg = 70;
// console.log(avg);
// if (avgg >= 70) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }
// // Using ternary operator
// avg >= 70 ? console.log("Pass") : console.log("Fail");

// // I. Arrays in JS
// const names = ["Kunal", "Aniket", "Pradnya", "Vidya", "Bhavesh"]; //Array
// console.log(names);
// // Accessing individual element in array (long method)
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

// // Getting length of array
// console.log(names.length);

// // J. Loops -> for, while, do-while

// // 1. For Loops
// //for (start; condition; increment) {
// // code block
// //}

// // Accessing arrays using for loops (ideal method)
// for (let arrIndex = 0; arrIndex < names.length; arrIndex++) {
//   console.log(names[arrIndex]);
// }

// // Mutating / Modifying ana array using methods - push, pop, shift, unshift

// const fruits = [];
// console.log(fruits);
// fruits.push("Banana");
// console.log(fruits);
// fruits.push("Apple");
// console.log(fruits);
// fruits.unshift("Orange");
// console.log(fruits.length);
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// // Example 4

// let sciMarks = Number(prompt("Enter your sc marks: "));
// let matMarks = Number(prompt("Enter your mt marks: "));
// let engMarks = Number(prompt("Enter your en marks: "));

// let marks = [];

// marks.push(sciMarks);
// marks.push(matMarks);
// marks.push(engMarks);
// console.log(marks);

// let addn = 0;
// for (let num = 0; num <= marks.length - 1; num++) {
//   addn = addn + marks[num];
//   // console.log(addn);
// }
// let average = addn / 3;
// console.log(avg);

// // After lecture questions

// // 1. Average value greater than equal to 70 -> pASS
// // Average value less than 70 -> Fail
// let res = avg >= 70 ? "Pass" : "Fail";
// console.log(`The result is ${res}`); // Aniket's solution
// avg >= 70 ? console.log("Pass") : console.log("Fail"); // Pradnya's solution
// console.log(`The result is ${avg >= 70 ? "Pass" : "Fail"}`); // Kunal's solution

// // 2. Question 2
// let result = 80 >= 70;
// console.log(result); // true
// console.log(typeof result); // Boolean

// // 3. Print all numbers from 1 to 20
// for (let num = 1; num <= 20; num++) {
//   console.log(num);
// }'
