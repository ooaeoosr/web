const express = require("express");
const router = express.Router();
// const router = require("express").Router(); //위랑 동일

router.get('/main', (req, res)=>{ //req= 보낸거 , res=받는거
    res.render('main',{title:'hello node!!!'}); //pug 파일에 데이터 넘겨줌
});

router.get('/about',(req,res)=>{
    res.render('/about', {title:"about"});
});     //익명함수의 축약형태 : lambda

module.exports = router; //module router을 꺼내서 씀