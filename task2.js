/*Задача #2

1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : 
Today is : Friday. 
Current time is : 4 PM : 50 : 22*/

function showDate() {
  let theDate = new Date();
  let daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let dayOfWeekNumber = theDate.getDay();
  let day = daysOfWeek[dayOfWeekNumber];
  let hours24 = theDate.getHours();
  let hours;
  if (hours24 > 12) {
    hours = hours24 - 12 + " PM";
  } else {
    hours = hours24 + " AM";
  }
  let minutes = theDate.getMinutes();
  let seconds = theDate.getSeconds();

  console.log("Today is : " + day);
  console.log("Current time is : " + hours + " : " + minutes + " : " + seconds);
}

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

2. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223;*/

function reverseNumber(num) {
  num = String(num);
  let revNum = "";
  for (let i = num.length - 1; i >= 0; i--) {
    revNum += num[i];
  }
  console.log("Input number = " + num);
  console.log("Result = " + revNum);
}

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

3. Write a JavaScript program to calculate the factorial of a number.
In mathematics, the factorial of a non-negative integer n, denoted by n!, 
is the product of all positive integers less than or equal to n. 
For example, 5! = 5 x 4 x 3 x 2 x 1 = 120*/

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  console.log("Input = " + num);
  console.log("Factorial of " + num + "! = " + result);
}

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

4. Write a JavaScript program that accept two integers and display the larger*/

function showMaxValue(a, b) {
  let maxValue = a > b ? a : b;

  console.log("Input = " + a + ", " + b);
  console.log("The larger value = " + maxValue);
}

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

5. Write a simple JavaScript program to join all elements of the following array into a string. 
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output : 
"Red,Green,White,Black"
"Red+Green+White+Black"*/

let myColor = ["Red", "Green", "White", "Black"];

function joinWords(arr) {
  console.log(arr.join(","));
  console.log(arr.join("+"));
}

/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

6. Write a JavaScript function to get the month name from a particular date. 
Test Data :
console.log(month_name(new Date("10/11/2009"))); 
console.log(month_name(new Date("11/13/2014")));
Output :
"October" 
"November"*/

function month_name(date) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let monthNum = date.getMonth();
  let result = months[monthNum];
  return result;
}

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

7. Write a JavaScript program to test the first character of a string is uppercase or not*/

function caseTester(word) {
  if (word[0] === word[0].toUpperCase()) {
    console.log("The first letter is uppercase = " + word);
  } else {
    console.log("The first letter is lowercase = " + word);
  }
}

/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

8. Write a JavaScript program to draw a smile*/

function drawSmiley() {
  console.log("      ___      ");
  console.log("   /      \\    ");
  console.log("  | O    O |    ");
  console.log("  |    |   |        ------------------");
  console.log("   \\ ____ / --------| Hello, Hoomans |");
  console.log("    \\ __ /          ------------------");
}
