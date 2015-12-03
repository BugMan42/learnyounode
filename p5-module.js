var fs = require('fs')  
var array = [];
var y = 0;
module.exports = function (path, extension, callback) {  
         fs.readdir(path, function(err, data) {
            if (err)  return callback(err) 
            for (var i = 0; i < data.length; ++i) {
               if (data[i].indexOf("."+extension) !=-1) {
                  array[y] = data[i];
                  ++y;
               }
            }
            callback(null, array)
         })
};


/*

  var fs = require('fs')  
     var path = require('path')  
     module.exports = function (dir, filterStr, callback) {  
       fs.readdir(dir, function (err, list) {  
         if (err)  
           return callback(err)  
       
         list = list.filter(function (file) {  
           return path.extname(file) === '.' + filterStr  
         })  
       
         callback(null, list)  
       })  
     }  

*/