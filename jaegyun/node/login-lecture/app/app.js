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
const dotenv = require("dotenv") //어떤 os에서도 환경변수 등록하고 가져올수있음
dotenv.config(); 

const app = express();

//라우팅
const home = require("./src/routes/home");

//앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); 
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되자 않는 문제 해결
app.use(express.urlencoded({extends: true}));

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports =app;