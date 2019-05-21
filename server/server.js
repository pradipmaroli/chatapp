const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

app.listen(3000,()=>{
    console.log(`app runing on port ${port}`);
});
// var mongoose = require('mongoose');

// mongoose.connect(' mongodb://127.0.0.1:27017/TodoApp',{ useNewUrlParser: true });

// var todo = mongoose.model('Todo',{
//     text:{
//         type:String
//     },
//     completed:{
//         type:Boolean 
//     },
//     completedAt:{
//         type:Number
//     }    
// });

// var newtodo = new todo({text:'cook'});
// newtodo.save().then((doc)=>{
//     console.log(`doc->${doc}`);
// },(e)=>{console.log(e)});