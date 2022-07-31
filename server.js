var express=require('express');
var app=express();

app.get("/",(req,res)=>{

    res.send(
        "<h1>Vijay Sales</h1>"
        +"<hr>"
        +"<h3>Smart Devices for sales</h3>"
        +"<br>"
        +"<ol>"
        +"<li>Laptops</li>"
        +"<li>Mobile phones</li>"
        +"<li>Smart watches</li>"
        +"</ol>"

    );

});


var server=app.listen(9000);
console.log("Vijay sales online shopping running on port 9000")