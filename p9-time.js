
var net = require("net")
var portNumber = process.argv[2];

function callback (socket) { 
    var str = "";
    var date = new Date();
    str += date.getFullYear();  
    str += "-"+String(date.getMonth()+1);     // starts at 0  
    str += "-"+date.getDate();      // returns the day of month  
    str += " " + date.getHours()  
    str += ":"+date.getMinutes() 
    //socket.end(String(date));
    socket.end(str);
} 

var server = net.createServer(callback);
server.listen(portNumber);
 
 
 
 /*
 
     var net = require('net')  
     function zeroFill(i) {  
       return (i < 10 ? '0' : '') + i  
     }  
     function now () {  
       var d = new Date()  
       return d.getFullYear() + '-'  
         + zeroFill(d.getMonth() + 1) + '-'  
         + zeroFill(d.getDate()) + ' '  
         + zeroFill(d.getHours()) + ':'  
         + zeroFill(d.getMinutes())  
     }  
       
     var server = net.createServer(function (socket) {  
       socket.end(now() + '\n')  
     })  
       
     server.listen(Number(process.argv[2]))  
 
 
 */