var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to db

mongoose.connect('mongodb+srv://gauransh:gauransh123@gauranshtodo-uk3yt.mongodb.net/gopubase?retryWrites=true&w=majority');

// create a schema

var todoSchema = new mongoose.Schema({
    item:String
});

var Todo= mongoose.model('Todo',todoSchema);


//var data = [{item:'get milk'},{item:'walk around'},{item:'machine Learning'}];
var urlencodedParser = bodyParser.urlencoded({extended:false});
module.exports=function(app){
    //stuff here
app.get('/todo',function(req,res){
        //get data from mongoDB
        Todo.find({},function(err,data){
            if (err) throw err;
            res.render('todo',{todos:data});    
    })
        
});


    app.post('/todo',urlencodedParser,function(req,res){
        //get data froom mongodb
        var newTodo = new Todo(req.body).save(function(err,data){
            if (err) throw err;
            res.json(data)
        })
    });

    app.delete('/todo/:item',function(req,res){
        //delete the requested item
        Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
            if (err) throw err;
            res.json(data)
        })
        
    });
};