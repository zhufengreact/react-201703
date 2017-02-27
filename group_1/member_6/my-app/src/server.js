/**
 * Created by dujingya on 17/2/27.
 */
var express=require('express');

var app=express();

app.get('/',function (req,res) {
    res.end('hello express')
});
var PORT = 3000 || process.env.PORT;
app.listen(PORT,function afterListen() {
    console.log(process.env.PORT);
    console.log('express running on the http://localhost:'+PORT);
})