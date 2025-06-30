let name = "Garima";         
const age = 21;              
var isStudent = true;        
let address;                 
let score = null;            

console.log(" Data Types:");
console.log(typeof name);     
console.log(typeof age);      
console.log(typeof isStudent);
console.log(typeof address);  
console.log(typeof score);

console.log(" Hoisting:");
console.log(x); 
var x = 10;
let y = 20;

let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");
userAge = Number(userAge);

if (userAge < 18) {
  alert(`Hey ${userName}, you’re a teen!`);
} else if (userAge >= 18 && userAge <= 60) {
  alert(`Welcome ${userName}, you’re an adult!`);
} else {
  alert(`Hello ${userName}, you’re a senior citizen!`);
}

console.log("Loops:");

for (let i = 1; i <= 10; i++) {
  console.log("For loop:", i);
}

let j = 2;
while (j <= 20) {
  console.log("While loop:", j);
  j += 2;
}

let k = 10;
do {
  console.log("Do...while loop:", k);
  k--;
} while (k >= 1);

function add(a, b) {
  return a + b;
}
console.log("Function add:", add(5, 3));

const square = function(num) {
  return num * num;
};
console.log("Square of 4:", square(4));

const greet = (name) => `Hello, ${name}!`;
console.log(greet("Garima"));

function processNumber(num, callback) {
  callback(num);
}

processNumber(5, function(n) {
  console.log("Double is", n * 2);
});
