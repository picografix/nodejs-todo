var express = require('express')
var todocontroller=require('./controllers/todocontroller');
var app= express();


app.set('view engine','ejs');
//static fiels
app.use(express.static('./public'))
//fire controller
todocontroller(app)
//listen to port
app.listen(3000);
console.log('Listening to port 3000');
