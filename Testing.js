//this is similar to the main file, but is used for testing

"use strict";


const HomePage = require("./HomePage");
const GradeInput = require("./GradeInput");
const QualifiedStudents = require("./QualifiedStudents");


//All of these will be called multiple times with varing inputs to test that the functions return the expected output
HomePage.DispalayInfo()

GradeInput.getGrades()
GradeInput.outputGPA()
GradeInput.AddToArray()

QualifiedStudents.getThreshold()
QualifiedStudents.outputGPA()
