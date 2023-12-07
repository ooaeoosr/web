const path = require("path"); //import와 유사
const express = require("express");

const app = express();
const apiRouter = require("./router.js");

app.set('views',path.join(__dirname), '../frontend');
app.set('view engine','pug'); //pug = html 처럼 생겼는데 간략화 시켜둔거
app.use('/', apiRouter);
var server = app.listen(3000, function(){
    console.log('server started');
});
