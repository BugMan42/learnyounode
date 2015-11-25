var fs = require('fs')  
var path = process.argv[2] 
var extension = process.argv[3]
fs.readdir(path, function(err, data) {
   for (var i = 0; i < data.length; ++i) {
       if (data[i].indexOf("."+extension) !=-1) console.log(data[i]);
   }
})

/* OFFICIAL ANSWER
var fs = require('fs')  
var path = require('path')  
fs.readdir(process.argv[2], function (err, list) {  
   list.forEach(function (file) {  
        if (path.extname(file) === '.' + process.argv[3])  
           console.log(file)  
    })  
})  
     
*/
   
