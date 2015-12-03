
var http = require("http")
var web = process.argv[2];
var web2 = process.argv[3];
var web3 = process.argv[4];
var str1 = "";
var str2 = "";
var str3 = "";
var ch = 0;
http.get(web, function (response) { 
    response.setEncoding('utf8')
    response.on("data", function (data) { 
        for (var i = 0; i < data.length; ++i) {
            str1 += data[i];
            //ch += data[i].length;
        } }) 
    response.on('error', console.error) 
    response.on('end', function(data) {
        //console.log(ch);
        console.log(str1);
    })
} );
http.get(web2, function (response) { 
    response.setEncoding('utf8')
    response.on("data", function (data) { 
        for (var i = 0; i < data.length; ++i) {
            str2 += data[i];
            //ch += data[i].length;
        } }) 
    response.on('error', console.error) 
    response.on('end', function(data) {
        //console.log(ch);
        console.log(str2);
    })
} );
http.get(web3, function (response) { 
    response.setEncoding('utf8')
    response.on("data", function (data) { 
        for (var i = 0; i < data.length; ++i) {
            str3 += data[i];
            //ch += data[i].length;
        } }) 
    response.on('error', console.error) 
    response.on('end', function(data) {
        //console.log(ch);
        console.log(str3);
    })
} );

/* OFFICIAL SOLUTION

 Here's the official solution in case you want to compare notes:  
 ─────────────────────────────────────────────────────────────────────────────  
   
     var http = require('http')  
     var bl = require('bl')  
     var results = []  
     var count = 0  
     function printResults () {  
       for (var i = 0; i < 3; i++)  
         console.log(results[i])  
     }  
     function httpGet (index) {  
       http.get(process.argv[2 + index], function (response) {  
         response.pipe(bl(function (err, data) {  
           if (err)  
             return console.error(err)  
       
           results[index] = data.toString()  
           count++  
       
           if (count == 3)  
             printResults()  
         }))  
       })  
     }  
       
     for (var i = 0; i < 3; i++)  
       httpGet(i)  
   


*/
