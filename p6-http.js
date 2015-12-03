
var http = require("http")
var web = process.argv[2]
if (web == undefined) console.log('')
if (web == '') console.log('')
http.get(web, function (response) { 
    response.setEncoding('utf8')
    response.on("data", function (data) { 
        console.log(data) }) 
    response.on('error', console.error)  
} );
