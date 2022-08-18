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

5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

9. Make a program that asks ten numbers and in the end prints out two biggest numbers.

10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.

-
