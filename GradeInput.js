//This will take the grades using a prompt, cacluate the GPA, and add that data to an array

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
  
  //still have to start and log prompt
};




exports.outputGPA = function(){
var gpa = ((csc141 + csc142 + csc240 + csc241)/100) //theres a chance the math for this is wrong, i didnt calculate anything yet
};






exports.addToArray = function(){
//idk where to start there, unsure if im making a single array with the gpa or a 2d array with both the students name and gpa
};
