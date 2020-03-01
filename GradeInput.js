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
        pattern: /[0-99]+/,
        message: 'Grade should be within 0-100',
        required: true
      },
      csc142: {
        pattern: /[0-99]+/,
        message: 'Grade should be within 0-100',
        required: true
      },
      csc240: {
        pattern: /[0-99]+/,
        message: 'Grade should be within 0-100',
        required: true
      },
      csc241: {
        pattern: /[0-99]+/,
        message: 'Grade should be within 0-100',
        required: true
      }
    }
  }
  var prompt = require('prompt');
  prompt.start();
  prompt.get(schema, function (err, result){
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
//idk where to start there, unsure if im making a single array with the gpa or a 2d array with both the students name and gpa
};

exports.printArray = function(){
  console.log(students);
}