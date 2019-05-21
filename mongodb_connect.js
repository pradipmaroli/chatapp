const Mongoclient = require('mongodb').MongoClient;


Mongoclient.connect(' mongodb://127.0.0.1:27017',{ useNewUrlParser: true },(err,client)=>{
    if(err){
        console.log('unable to connect');
    }
    console.log('connected');
    const db = client.db('TodoApp');
    db.collection('todos').insertOne({
        text:'hi',
        completed:false
    },(err,res)=>{
        if(err) {console.log('err collection')}
        console.log('created');

        console.log(JSON.stringify(res.ops,undefined,2));
    });

   db.collection('todos').find({completed:true}).toArray().then((res)=>{
    console.log(JSON.stringify(res,undefined,2));
   });
    client.close();
});