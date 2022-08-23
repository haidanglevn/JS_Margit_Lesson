Loop Assignments (Don’t use arrays)

1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

for (number = 1; number < 100; number++) {
if (number & (2 != 0)) {
console.log(number);
}
}

2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.

let result = " ";
let number = 1,
number1 = 99; /_ leave this out so it doesnt reset all the time_/
for (number; number < 51; number++) {
if (number % 2 == 0) {
result += number + " ";
for (number1; number1 > 50; number1--) {
if (number1 % 2 == 0) {
result += number1 + " ";
number1 -= 1; /_ important so it doesnt stay at first number _/
break;
}
}
}
}
console.log(result);

---------------------------- Margit's Solution ------------------------------------------------
let result= "";
let end= 98;

for (let i=2; i <100; i+= 2) {
result += ' ' + i + ' ';
result += ' ' + end + ' ';
end -=2;
}
console.log(result);

3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

let i = 1;
let speed = 1;
function askSpeed() {
let distance = parseInt(prompt("What the distance in km?"));
let time = parseInt(prompt("What the time in hour?"));
speed = parseInt(distance / time);
console.log("This is test number", i);
console.log("Distance is ", distance, " km and time is ", time, "hour");
console.log("Your speed is ", speed, " km/h");
}

for (i = 1; i < 100; i++) {
askSpeed();
if (speed < 1) {
i += 1000;
console.log("TEST END WHEN SPEED IS ZERO");
}
}

4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

let result = " ";
let number, i;
let even = 0;
function askNumber() {
number = parseInt(prompt("Give me a number?"));
console.log("Your ", i, " number is ", number);
}
for (i = 1; i < 5; i++) {
askNumber();
if (number % 2 == 0) {
result += number + " ";
even++;
}
}
console.log("There are ", even," even number(s)");
console.log("All the even numbers are ", result);

5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

let result = " ";
let number, i, average;
let sum = 0;

function askNumber() {
number = parseInt(prompt("Give me a number?"));
console.log("Your ", i, " number is ", number);
sum += number;

average = sum / (i - 1);
}

for (i = 1; i < 100; i++) {
askNumber();
if (number == 0) {
i += 1000;
}
}
console.log("The sum is ",sum);
console.log("The average is ", average);
console.log("Program ends because result is 0");

6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

   let number, i, average;
   let sum = 0;

function askNumber() {
number = parseInt(prompt("Give me a number?"));
console.log("Your ", i, " number is ", number);
sum += number;
average = sum / i;
}

for (i = 1; i < 6; i++) {
askNumber();
}
console.log("The sum is ", sum);
console.log("The average is ", average);

7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

let number, i, average, answer;
let sum = 0;

function askNumber() {
number = parseInt(prompt("Give me a number?"));
console.log("Your ", i, " number is ", number);
sum += number;
console.log("Your current sum is ", sum);
average = sum / i;
}

function giveNumber() {
answer = String(prompt("Do you want to give more number? (y/n)"));
console.log("your answer is ", answer);
if (answer == "y") {
console.log("You answered YES, program continues");
} else if (answer == "n") {
console.log("You answered NO, program ends");
} else {
console.log("Wrong answer, y or n only");
giveNumber();
}
}

for (i = 1; i < 26; i++) {
askNumber();
giveNumber();
if (answer == "n") {
i += 100;
console.log("The average is =", average);
}
}

8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

let i, number;
let smallest = Infinity;
let a;
function howManyNumber() {
a = parseInt(prompt("How many number you want to give?"));
console.log("You want to give ", a, " number(s)");
for (i = 1; i < a + 1; i++) {
askNumber();
}
}

function askNumber() {
number = parseInt(prompt("Give me a number?"));
console.log("Your ", i, " number is ", number);
if (number < smallest) {
smallest = number;
}
}

howManyNumber();
console.log("The smallest number is ", smallest);

NOTE: haven't found a way to repeat howManyNumber() when user gives wrong answer.

9. Make a program that asks ten numbers and in the end prints out two biggest numbers.

let i, number;
let num1 = (num2 = -Infinity);

function askNumber() {
number = parseInt(prompt("Give me a number?"));
console.log("Your number is ", number);
}
for (i = 1; i < 11; i++) {
askNumber();
if (number > num1 && number > num2) {
num1 = num2;
num2 = number;
console.log("num1 =", num1, " and num2 =", num2);
} else if (number > num1 && number < num2) {
num1 = number;
console.log("num1 =", num1, " and num2 =", num2);
} else {
console.log("Nothing changes, num1 =", num1, " and num2 =", num2);
}
}

console.log("The two biggest numbers are ", num1, " and ", num2);

10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.

let i, number, average;
let smallest = Infinity;
let biggest = -Infinity;
let sum = 0;

function askNumber() {
number = parseInt(prompt("Give me a number?"));
console.log("Your ", i, " number is ", number);
sum += number;
average = sum / i;
}

for (i = 1; i < 5; i++) {
askNumber();
if (number > biggest && number < smallest) {
biggest = number;
smallest = number;
console.log(
"Now the smallest number is ",
smallest,
" and the biggest is ",
biggest
);
} else if (number > biggest) {
biggest = number;
console.log(
"Now the smallest number is ",
smallest,
" and the biggest is ",
biggest
);
} else if (number < smallest) {
smallest = number;
console.log(
"Now the smallest number is ",
smallest,
" and the biggest is ",
biggest
);
} else {
console.log(
"The number is neither the smallest or the biggest, nothing changes."
);
}
}

console.log("The sum is ", sum);
console.log("The average is ", average);
