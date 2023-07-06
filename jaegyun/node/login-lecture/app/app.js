"use strict";

//서버의 중심 파일

// const http = require("http");
// const { charsets } = require("mime");
// const app = http.createServer((req,res) => {
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"}); //utf-8로 해석해달라 응답해준다
//     if(req.url === "/"){    //express를 쓰는이유
//                             //if문을 쓰는순간 코드가 지저분해짐
//         res.end("여기는 루트입니다");
//     } else if(req.url === "/login"){
//         res.end("여기는 로그인 화면입니다.");
//     }
// });

// app.listen(3001, ()=>{
//     console.log("http로 가동된 서버입니다");
// });

//묘듈
const express = require("express"); //express
const app = express();

 
const PORT = 3000;

//라우팅
const home = require("./src/routes/home");

//앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); 
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({extends: true}));

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports =app;