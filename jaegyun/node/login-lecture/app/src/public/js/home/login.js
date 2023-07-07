"use strict"
//  DOM -> Document Object Model (문서 객체 모델)

const id =document.querySelector("#id"), //#id = 선택자 // # - <input id = "id">
    paword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login() {
    const req ={
        id: id.value,
        psword: psword.value,
    };
    

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success){
                location.href = "/";
            } else {
              alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("로그인 중 에러 발생");
        });
}