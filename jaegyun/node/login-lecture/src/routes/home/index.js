"use strict";

const express = require("express");
const router = express.Router();//express에 router를 불러와준다

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
router.get("/login", ctrl.login); //컨트롤러 부분을 모듈화한다.

module.exports = router; //외부로 내보내주는 명 령 