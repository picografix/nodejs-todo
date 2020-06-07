var express = require('express')
var todocontroller=require('./controllers/todocontroller');
var app= express();
app.set('port',(process.env.PORT || 5000));

app.set('view engine','ejs');
//static fiels
app.use(express.static('./public'))
//fire controller
todocontroller(app)
//listen to port
app.get('/',(res,req)=>{
    res.send('Hello')
})
app.listen(app.get('port'),function(){
console.log('Running on:'+app.get('port'));
});
