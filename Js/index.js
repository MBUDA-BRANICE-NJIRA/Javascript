// alert("Javascript")

//SYNTAX

//This are simply the rules of Javascript
//-Javascript is case sensitive
//Javascript is always written in lowercase
//Evey statement always ends wth a semi collon

//Variables
var myAge = 25;
var myName = "John Doe";
//Variables are used to store values in Javascript
//Variables are declared with the var keyword
//Variables can be reassigned with the var keyword
//Variables can be declared with the let keyword
//Variables can be declared with the const keyword
//Variables can be declared with the var keyword and then reassigned with the let keyword

// OPERATORS
// This basicaly the Arithmetic operator like = + - etc

var myAge = 25;
var myVar = 12;
myVar = myVar + 20;

// -Varibles are runned on the conslol on the web like chrome

//BOOLEAN
//This is a true or false value
// eg. 5 < 3
//This is a false value

//IF STATEMENTS
// var iLikemeat = true;
// if (false) {
//     document.write("Hear is your meat Meat menu....");
// } else {
//     document.write('Your like vegatables');

// }

// var iLoveYou = true;
//  if (false) {
//     document.write("Your special to me...!");
//  } else {
//     document.write("Am with someone else");
//  }

//  if (5 > 3) {
//     document.write("Its mathematicaly write");
//  } else {
//     document.write("Learn more math");
//  }

//  if (2 < 4) {
//     console.log("This is write");
//  } else {
//     document.write("Learn more math");
//  }

//ELSEIF

// var myAge = 19;

// if (myAge > 30) {

//     document.write("Your above 30")
// } else if(myAge > 20) {

//     document.write("Your above 20")
// }
// else if(myAge > 10){
//     document.write("Your above 10");
// }
// else {
//     document.write("Your more years for you");
// }

// var myAge = 21;
// if (myAge > 30) {
//     document.write("You are over 30")
// }else if (myAge > 20){
//     document.write("You are over 20")
// }else if (myAge > 10){
//     document.write("you are over 10")
// } else{
//     document.write("You are under 10")
// }

// LOGIC OPERATORS
// WITH && means "and"
//  var myAge = 15;

//  if (myAge >= 18 && myAge <= 30) {
//     document.write("You can come bro");

//  }else{
//     document.write("Your not coming to the party");
//  }

//  var myAge = 15;

//  if (myAge >= 18 || myAge <= 30) {

//     document.write("Your not coming to the party");

//  }else{
//     document.write("You can come bro");
//  }

// LOOPS
// WHile Loops

// var myAge = 5;
// while (myAge < 10) {
//     console.log("Your less tham 10");
//     age++;
// }
// document.write("You are amazind bro and over 10");

// FOR LOOP
// for (i = 0; i < 10; i++) {
//   console.log(i);
//   if (i == 7) {
//     break;
//   }
// }
// console.log("I have broken the loop")

// functions

// 
function getAverage(a,b,c){
   
    var average = (a + b + c) /2;
    console.log(average);
    
}
getAverage(7,13,10);  //There are different tpes of functions we have the 
// 1.arrow function
//2.Normal functions
//3.Function declaratio
//4.Function Expression
//5.Anonymouse Function
//6.Emedietely invoked function
//7.Generator
//8.Callback functions
//9.Higher order functions
//10.Constructor


// working with Numbers 
// var a = 50;
// var b = 5;
// console.log(a + b);


var a = "apple";
var b = 5;

if (isNaN(a)) {
    console.log("a is not a number bro");
} else {
    console.log("This the end result of the (a * b)");
}






