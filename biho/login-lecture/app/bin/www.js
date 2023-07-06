"use strict";

const app = require("../app"); // app.js의 app을 받아옴
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("서버 가동");
});
// listen으로 서버 띄움. 2번째 파라미터에 콜백함수
