
var http = require("http")
var web = process.argv[2]
var str = "";
var ch = 0;
http.get(web, function (response) { 
    response.setEncoding('utf8')
    response.on("data", function (data) { 
        for (var i = 0; i < data.length; ++i) {
            str += data[i];
            ch += data[i].length;
        } }) 
    response.on('error', console.error) 
    response.on('end', function(data) {
        console.log(ch);
        console.log(str);
    })
} );


/*

     var http = require('http')  
     var bl = require('bl')  
     http.get(process.argv[2], function (response) {  
       response.pipe(bl(function (err, data) {  
         if (err)  
           return console.error(err)  
         data = data.toString()  
         console.log(data.length)  
         console.log(data)  
       }))    
     })  

*/
