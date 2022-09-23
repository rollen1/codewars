// The code provided is supposed replace all the dots . in the specified String str with dashes -

/* 

var replaceDots = function(str) {
    return str.replace(/./, '-');
} 

But it's not working properly. 

// Task
 Fix the bug so we can all go home early. 

// Note
 String str will never be null. 

*/

function replaceDots(str) {
    return str.replace(/\./g , '-');
  }
  
  replaceDots("one.two.three")
