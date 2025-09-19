//   CHAPTER 10-11

// Q1
// var userInput=prompt("Enter your city name");

// if (userInput==="karachi"){
//     console.log("Welcome to city of lights")
// }

// Q2
// var gender= prompt("Enter your gender");

// if (gender=="Male"){
//     console.log("Good Morning Sir");
// }  else if (gender=="Female"){
//     console.log("Good Morning Madam");
// }

// Q4
// var fuel= prompt("Enter Your Fuel in litres");

// if (fuel < 0.25 ){
//     console.log("Please refill the fuel in your car");
// }

// // Q5
// a.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// // b. 
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// // c.
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// // d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// // e.
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
// alert("car is smaller than cat");
// }
// Q6
var sub1 = +prompt("Enter marks obtained in Subject 1:");
var sub2 = +prompt("Enter marks obtained in Subject 2:");
var sub3 = +prompt("Enter marks obtained in Subject 3:");
var totalMarks = +prompt("Enter total marks:");

var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h3>Marks Sheet</h3>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");

// Grade calculation
if (percentage >= 80) {
    document.write("Grade: A-one<br>Remarks: Excellent");
}
else if (percentage >= 70) {
    document.write("Grade: A<br>Remarks: Good");
}
else if (percentage >= 60) {
    document.write("Grade: B<br>Remarks: You need to improve");
}
else {
    document.write("Grade: Fail<br>Remarks: Sorry");
}


// if(totalMarks - subjectOne,subjectTwo,subjectThree){
//     document.write("Marks Obtained:")
// }
// Q7

// var guess= +prompt("Guess the secret number");

// if(guess == "6"){
//     console.log("Bingo! Correct Answer");
// }   else if(guess >"6"){
//      console.log("Close Enough To The Correct Answer")
//  }

// Q8
//  var divisible=+prompt("Enter a number");
//  if(divisible %3 ==0){
//      document.write("This number is divisible by 3");
//  }  else  {
//     document.write("This number is not  divisible by 3");
//  }

// Q9
//  var number=+prompt("Enter a number");
//  if(number % 2 ===0){
//     document.write("This is a Even number");
//  } else{
//     document.write("This is a Odd number")
//  }

// }
// Q10
// var temperature=+prompt("Write a temperature");
// if (temperature >40){
//     document.write("It is too hot outside.");
// } else if (temperature >30){
//     document.write("The Weather today is Normal");
// } else if (temperature >20){
//     document.write("“Today’s Weather is cool");
// }    else if (temperature >10){
//     document.write("OMG! Today’s weather is so Cool");
// }    

// Q11

// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var operation = prompt("Enter operation (+, -, *, /, %):");

// var result;


// if (operation === "+") {
//     result = num1 + num2;
// }
// if (operation === "-") {
//     result = num1 - num2;
// }
// if (operation === "*") {
//     result = num1 * num2;
// }
// if (operation === "/") {
//     result = num1 / num2;
// }
// if (operation === "%") {
//     result = num1 % num2;
// }


// document.write("First Number: " + num1 + "<br>");
// document.write("Second Number: " + num2 + "<br>");
// document.write("Operation: " + operation + "<br>");
// document.write("Result: " + result);

// Chap 12-13
// Q1
// var char = prompt("Enter a character:");
// var ascii = char.charCodeAt(0);

// if (ascii >= 48 && ascii <= 57) {
//     document.write("You entered a Number");
// }
// else if (ascii >= 65 && ascii <= 90) {
//     document.write("You entered an Uppercase Letter");
// }
// else if (ascii >= 97 && ascii <= 122) {
//     document.write("You entered a Lowercase Letter");
// }
// else {
//     document.write("You entered a Special Character");
// }

// Q2
// var num1= + prompt("Enter  first Number");
// var num2= + prompt("Enter second Number");

// if(num1 > num2 ){
//     document.write(num1 + " larger then " + num2);
// } else if(num2 > num1){
//     document.write(num2 + " Larger then" + num1);
// } else{
//     document.write("Both numbers are equal");
// }
// Q3
// var userNumber= +prompt("Enter Number");

// if(userNumber > 0){
//     document.write(userNumber + "  is a positive number");
// } else if (userNumber < 0){
//     document.write(userNumber + "  is a negative number" );
// } else {
//     document.write("This number is zero");
// }

// Q4
// var userVowel=prompt("Enter a  Alphabet");

// if(userVowel === "a"){
//     console.log("This alphabet is a vowel");
// } else if (userVowel === "e"){
//     console.log("This alphabet is  a vowel");
// } else if (userVowel === "i"){
//      console.log("This alphabet is  a vowel");
// }  else if (userVowel === "o"){
//     console.log("This alphabet is  a vowel");
// }   else if (userVowel === "u"){
//     console.log("This alphabet is  a vowel");
// } else {
//      console.log("This alphabet is  not a vowel");
// } 

// Q5
// var userPassword="sob@n786";
// var password=prompt("Enter your password");

// if (password === "" || password === null){
//     console.log("Please Enter Your Password");
// }  else if (password == userPassword){
//     console.log("Correct");
// } else {
//     console.log("Incorrect Password");
// }

// Q6
// var hour= +prompt("Enter Hour");

// if(hour <18){
//     console.log("Good Day");
// } else {
//     console.log("Goof Evening");
// }

// Q7
// var time= +prompt("Enter Time");

// if(time ==1300){
//     console.log(" 1PM ");
// } else if (time ==1400){
//     console.log(" 2PM ");
// }  else if (time ==1500){
//     console.log("3PM");
// } else if (time ==1600){
//     console.log("4PM");
// } else if (time ==1700){
//     console.log("5PM"); 
// } else if (time ==1800){
//     console.log("6PM");     
// } else if (time ==1900){
//     console.log("7PM");
// } else if (time ==2000){
//     console.log("8PM");
// } else if (time ==2100){
//     console.log("9PM");
// } else if (time ==2200){
//     console.log("10PM");
// } else if (time ==2300){
//     console.log("11PM");  
// } else if (time ==2400){
//     console.log("12PM"); 
// }                 
