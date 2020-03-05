//this is similar to the main file, but is used for testing

"use strict";

const HomePage = require("./HomePage");
const GradeInput = require("./GradeInput");
const QualifiedStudents = require("./QualifiedStudents");

//Array of names for testing
let names = [""," ","Mark Cameron Richmond","Si Hu","Zachary Colangelo","Abcdefghijklmnop Qrstuvwxyzabcdefghijklmnopshidbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"];

//Array of grades to facilitate testing by checking against. Letter Grade, Upper Bound, Lower Bound, Outside of boundry.
let grades = ["A","A-","B+","B","B-","C+","C","C-","D+","D","D-","F","Z"];

//All of these will be called multiple times with varing inputs to test that the functions return the expected output
HomePage.displayInfo();

//GradeInput.getGrades();
var name, csc141, csc142, csc240, csc241, gpa;

//use names and grades arrays to randomly test values
name = names[Math.floor((Math.random() * 5) + 1)];
csc141 = grades[Math.floor((Math.random() * 12) + 1)];
csc142 = grades[Math.floor((Math.random() * 12) + 1)];
csc240 = grades[Math.floor((Math.random() * 12) + 1)];
csc241 = grades[Math.floor((Math.random() * 12) + 1)];

//NOTE: because of the way the developers wrote the code for GradeInput I couldn't call the fuction without bringing up a whole user prompt :(
//I copied and pasted the developers code here to test their code --Mark
switch (csc141) {
    case 'A':
       csc141 = 4;
       break;
    case 'B':
       csc141 = 3;
       break;
    case 'C':
       csc141 = 2;
       break;
    case 'D':
       csc141 = 1;
       break;
    case 'F':
       csc141 = 0;
       break;
    default:
       csc141 = 0;
 }
 
 switch (csc142) {
    case 'A':
       csc142 = 4;
       break;
    case 'B':
       csc142 = 3;
       break;
    case 'C':
       csc141 = 2;
       break;
    case 'D':
       csc142 = 1;
       break;
    case 'F':
       csc142 = 0;
       break;
    default:
       csc142 = 0;
 }
 
 switch (csc240) {
    case 'A':
       csc240 = 4;
       break;
    case 'B':
       csc240 = 3;
       break;
    case 'C':
       csc240 = 2;
       break;
    case 'D':
       csc240 = 1;
       break;
    case 'F':
       csc240 = 0;
       break;
    default:
       csc240 = 0;
 }
 
 switch (csc241) {
    case 'A':
       csc241 = 4;
       break;
    case 'B':
       csc241 = 3;
       break;
    case 'C':
       csc241 = 2;
       break;
    case 'D':
       csc241 = 1;
       break;
    case 'F':
       csc241 = 0;
       break;
    default:
       csc241 = 0;
 }

gpa = ((csc141 + csc142 + csc240 + csc241)/4);
console.log("Name: " + name);
console.log("GPA: " + gpa);
