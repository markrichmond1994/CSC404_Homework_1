//this is similar to the main file, but is used for testing

"use strict";


const HomePage = require("./HomePage");
const GradeInput = require("./GradeInput");
const QualifiedStudents = require("./QualifiedStudents");

//Array of names for testing. Long names, short names, blank, spaces, etc
let names = ["Mark Richmond", "Si Hu", "", " ", "ZacH CoLaNgelO"]

//Array of grades to facilitate testing by checking against. Letter Grade, Upper Bound, Lower Bound.
let grades = [["A","A-","B+","B","B-","C+","C","C-","D+","D","D-","F"],[100,92,89,86,82,79,76,72,69,66,62,59][93,90,87,83,80,77,73,70,67,63,60,0]];

//All of these will be called multiple times with varing inputs to test that the functions return the expected output
HomePage.displayInfo();

GradeInput.getGrades();
GradeInput.outputGPA();
GradeInput.addToArray();

QualifiedStudents.getThreshold();
QualifiedStudents.outputGPA();
