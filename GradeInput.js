//This will take the grades using a prompt, cacluate the GPA, and add that data to an array


var gpa;
var name;
let students =[];

exports.getGrades = function(){
   var schema = {
    properties: {
      name: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, space, or dashes',
        required: true
      },
      csc141: {
        pattern: /[A-F]/,
        message: 'Grade should be a letter grade',
        required: true
      },
      csc142: {
        pattern: /[A-F]/,
        message: 'Grade should be a letter grade',
        required: true
      },
      csc240: {
        pattern: /[A-F]/,
        message: 'Grade should be a letter grade',
        required: true
      },
      csc241: {
        pattern: /[A-F]/,
        message: 'Grade should be a letter grade',
        required: true
      }
    }
  }
  var prompt = require('prompt');
  prompt.start();
  prompt.get(schema, function (err, result){
     switch (result.csc141) {
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
     
     switch (result.csc142) {
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
     
     switch (result.csc240) {
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
     
     switch (result.csc241) {
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
    gpa = ((result.csc141 + result.csc142 + result.csc240 + result.csc241)/4);
    name = result.name; 
  });
}


exports.outputGPA = function(){
  return gpa;
}

exports.outputName = function(){
  return name;
}

exports.addToArray = function(name, gpa){
students = students.push([name,gpa]);
};

exports.students = students;

exports.printArray = function(){
  console.log(students);
}
