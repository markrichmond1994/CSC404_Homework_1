//This program calls all of our subsystems and is what we use to actually run the program


"use strict";


const HomePage = require("./HomePage");
const GradeInput = require("./GradeInput");
const QualifiedStudents = require("./QualifiedStudents");


HomePage.displayInfo();

GradeInput.getGrades();

//GradeInput.addToArray(GradeInput.outputName,GradeInput.outputGPA()); this is no longer needed
//GradeInput.printArray();

QualifiedStudents.getThreshold();
//QualifiedStudents.outputGPA();

