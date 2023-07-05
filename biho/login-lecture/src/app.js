"use strict";

// 모듈
const express = require("express"); //require 명령어로 express 모듈 다운
const app = express(); //express 실행



// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views"); //view 파일, 파일이 저장될 폴더 이름
app.set("view engine", "ejs"); //html 코드를 어떤 엔진으로 해석할지 정함. view engine을 ejs엔진 사용

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드. 루트 경로로 오면 home으로 이동

module.exports = app;

//package.json만 있으면 npm install 명령어를 통해 node_modules를 생성해주기 때문에 node_modules 폴더를 깃허브에
//올리지 않아도 됨.