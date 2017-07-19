const express = require('express')
const fs = require('fs')
const app = express()



app.get('/',function(req,res){
    (function(){
        fs.readFile(__dirname+'/../src/data/index.json','utf-8',function(err,data){
            if(!err){
                res.end(data)
                console.log(data)
            }
        })
    })()
})

const server = app.listen(80,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('example app listening at http://%s:%s',host,port)
})