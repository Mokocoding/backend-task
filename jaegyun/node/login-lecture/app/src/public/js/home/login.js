"use strict"
//  DOM -> Document Object Model (문서 객체 모델)

const id =document.querySelector("#id"), //#id = 선택자 // # - <input id = "id">
    paword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req ={
        id: id.value,
        psword: psword.value,
    };
    console.log(req,JSON.stringify(req));

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then(console.log);
}