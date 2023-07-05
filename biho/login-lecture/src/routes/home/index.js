"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
//get으로 루트경로 생성. render 메서드를 통해 home/index파일 띄움

router.get("/login", ctrl.login);
//get으로 login경로 생성. render 메서드를 통해 home/login파일 띄움

module.exports = router; // 외부파일에서 사용 가능하도록 위해 외부로 내보내기.