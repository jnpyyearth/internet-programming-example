console.log("Hello World!!");
// number
var age = 40;
var gpa = 2.64;
age = age + 1;

const PI = 3.14;
// PI = 3.15;
console.log(PI);

// string
var name = "Boonchoo";
var surname = 'Jitnupong';

// boolean
var isStudent = false;
console.log(typeof name);
console.log(typeof isStudent);
console.log(name + " " + surname);
console.log(age + 20);

// compare without data type
console.log(1 == '1');
// compare with data type
console.log(1 === '1');

if (isStudent) {
    console.log(name + " is student");
} else {
    console.log(name + " is not student");
}

var height = 1.8;
var weight = 65.0;
var bmi = weight / height**2;

// check bmi situation by condition
// > 40 --> overweight;
// < 15 --> underweight;
// normal weight;


switch (isStudent) {
    case true:
        console.log("You are student");
        break;
    default:
        console.log("You are People");
}

for(var i=0; i<10; i++){
    console.log(i);
}

var month = 12;
while(month > 0) {
    console.log(month);
    month--;
}

do {
    console.log(month);
    month--;
} while(month > 0);

function plus(a, b) {
    return a + b;
}

let minus = function(a, b) {
    return a - b;
}

let multiply = (a, b) => {
    return a * b;
}

console.log(plus(1, 2));
console.log(minus(2, 1));
console.log(multiply(2, 2));

function findAverage(...args) {
    var sum = 0;
    for(let arg of args) {
        sum = sum + arg;
    }
    return sum / args.length;
}

console.log(findAverage(2, 3, 5, 20, 18, 1));