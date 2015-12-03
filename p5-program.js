
var mymodule = require('./mymodule.js')
var path = process.argv[2] 
var extension = process.argv[3]

var callback = function(err, data) {
  if (err) throw err; // Check for the error and throw if it exists.
  data.forEach(function (file) {   
       console.log(file)  
    })  
};
mymodule(path, extension, callback);

/*   
     var filterFn = require('./solution_filter.js')  
     var dir = process.argv[2]  
     var filterStr = process.argv[3]  
     filterFn(dir, filterStr, function (err, list) {  
       if (err)  
         return console.error('There was an error:', err)  
       list.forEach(function (file) {  
         console.log(file)  
       })  
     })  

*/