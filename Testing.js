//this is similar to the main file, but is used for testing

"use strict";


const HomePage = require("./HomePage");
const GradeInput = require("./GradeInput");
const QualifiedStudents = require("./QualifiedStudents");


//All of these will be called multiple times with varing inputs to test that the functions return the expected output
HomePage.displayInfo();

GradeInput.getGrades();
GradeInput.outputGPA();
GradeInput.addToArray();

QualifiedStudents.getThreshold();
QualifiedStudents.outputGPA();
