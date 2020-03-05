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

var name, csc141, csc142, csc240, csc241, gpa;

//use names and grades arrays to randomly test values
var i;
for (i = 0; i < 10; i++){
   name = names[Math.floor((Math.random() * 5) + 1)];
   csc141 = grades[Math.floor((Math.random() * 12) + 1)];
   csc142 = grades[Math.floor((Math.random() * 12) + 1)];
   csc240 = grades[Math.floor((Math.random() * 12) + 1)];
   csc241 = grades[Math.floor((Math.random() * 12) + 1)];
   switch (csc141) {
    case 'A':
       csc141 = 4.0;
       break;
    case 'A-':
       csc141 = 3.7;
       break;
    case 'B+':
       csc141 = 3.3;
       break;
    case 'B':
       csc141 = 3.0;
       break;
    case 'B-':
       csc141 = 2.7;
       break;
    case 'C+':
       csc141 = 2.3;
       break;
    case 'C':
       csc141 = 2;
       break;
    case 'C-':
       csc141 = 1.7;
       break;
    case 'D+':
       csc141 = 1.3;
       break;
    case 'D':
       csc141 = 1;
       break;
    case 'D-':
        csc141 = 0.7
    case 'F':
       csc141 = 0;
       break;
    default:
       csc141 = 0;
    }
 
 switch (csc142) {
   case 'A':
      csc142 = 4.0;
      break;
   case 'A-':
      csc142 = 3.7;
      break;
   case 'B+':
      csc142 = 3.3;
      break;
   case 'B':
      csc142 = 3.0;
      break;
   case 'B-':
      csc142 = 2.7;
      break;
   case 'C+':
      csc142 = 2.3;
      break;
   case 'C':
      csc142 = 2;
      break;
   case 'C-':
      csc142 = 1.7;
      break;
   case 'D+':
      csc142 = 1.3;
      break;
   case 'D':
      csc142 = 1;
      break;
    case 'D-':
      csc142 = 0.7;
      break;
   case 'F':
      csc142 = 0;
      break;
   default:
      csc142 = 0;
    }
 
 switch (csc240) {
   case 'A':
      csc240 = 4.0;
      break;
   case 'A-':
      csc240 = 3.7;
      break;
   case 'B+':
      csc240 = 3.3;
      break;
   case 'B':
      csc240 = 3.0;
      break;
   case 'B-':
      csc240 = 2.7;
      break;
   case 'C+':
      csc240 = 2.3;
      break;
   case 'C':
      csc240 = 2;
      break;
   case 'C-':
      csc240 = 1.7;
      break;
   case 'D+':
      csc240 = 1.3;
      break;
   case 'D':
      csc240 = 1;
      break;
    case 'D-':
      csc240 = 0.7;
      break;
   case 'F':
      csc240 = 0;
      break;
   default:
      csc240 = 0;
    }
 
 switch (csc241) {
   case 'A':
      csc241 = 4.0;
      break;
   case 'A-':
      csc241 = 3.7;
      break;
   case 'B+':
      csc241 = 3.3;
      break
   case 'B':
      csc241 = 3.0;
      break;
   case 'B-':
      csc241 = 2.7;
      break;
   case 'C+':
      csc241 = 2.3;
      break;
   case 'C':
      csc241 = 2;
      break;
   case 'C-':
      csc241 = 1.7;
      break;
   case 'D+':
      csc241 = 1.3;
   case 'D':
      csc241 = 1;
      break;
    case 'D-':
      csc241 = 0.7;
      break;
   case 'F':
      csc241 = 0;
      break;
   default:
      csc241 = 0;
    }
   gpa = ((csc141 + csc142 + csc240 + csc241)/4);
   console.log("Name: " + name);
   console.log("GPA: " + gpa + "\n");
}
