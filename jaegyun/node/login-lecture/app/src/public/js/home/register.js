"use strict"
//  DOM -> Document Object Model (문서 객체 모델)

const id =document.querySelector("#id"), //#id = 선택자 // # - <input id = "id">
    name = document.querySelector("#name"),
    paword = document.querySelector("#psword"),
    confirmPaword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");
    
registerBtn.addEventListener("click", register);

function register() {
    const req ={
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPaword: confirmPaword.value,
    };
    

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success){
                location.href = "/login";
            } else {
              alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("회원가입 중 에러 발생");
        });
}