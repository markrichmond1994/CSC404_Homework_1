//This will take the grades using a prompt, cacluate the GPA, and add that data to an array


var gpa;
var name;
let students = [];

var csc141,csc142,csc240,csc241;

exports.students = students;
exports.getGrades = function(){

   var schema = {
    properties: {
      name: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, space, or dashes',
        required: true
      },
      csc141: {
        pattern: /[A-F][\+|\-]?|[a-f][\+|\-]?/, //Idk if we want to open this can or worms or not
        message: 'Grade should be a letter grade',
        required: true
      },
      csc142: {
        pattern: /[A-F][\+|\-]?|[a-f][\+|\-]?/,
        message: 'Grade should be a letter grade',
        required: true
      },
      csc240: {
        pattern: /[A-F][\+|\-]?|[a-f][\+|\-]?/,
        message: 'Grade should be a letter grade',
        required: true
      },
      csc241: {
        pattern: /[A-F][\+|\-]?|[a-f][\+|\-]?/,
        message: 'Grade should be a letter grade',
        required: true
      }
    }
  }
  var prompt = require('prompt');
  prompt.start();
  prompt.get(schema, function (err, result){
   processPrompt(result.csc141,result.csc142,result.csc240,result.csc240);
    gpa = ((csc141 + csc142 + csc240 + csc241)/4);
    name = result.name;
    
    addToArray(name,gpa);
    var QualifiedStudents = require('./QualifiedStudents');
    QualifiedStudents.outputGPA();
  });
}
processPrompt = function(csc141Input,csc142Input,csc240Input,csc241Input){ //Takes the inputted letter grade and resolves to a number
   switch (csc141Input.toUpperCase()) {
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
   
   switch (csc142Input.toUpperCase()) {
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
   
   switch (csc240Input.toUpperCase()) {
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
   
   switch (csc241Input.toUpperCase()) {
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

}
exports.processPrompt = processPrompt;


exports.outputGPA = function(){
  return gpa;
}

exports.outputName = function(){
  return name;
}

addToArray = function(name, gpa){
students.push([name,gpa]);
//console.log("test output\n");
//console.log(students);
}
exports.addToArray = addToArray; //export statement for debug


exports.printArray = function(){
  console.log(students);
}
