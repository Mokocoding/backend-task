"use strict"
//  DOM -> Document Object Model (문서 객체 모델)

const id =document.querySelector("#id"), //#id = 선택자 // # - <input id = "id">
    name = document.querySelector("#name"),
    paword = document.querySelector("#psword"),
    confirmPaword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");
    
registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("아이디를 입력해주십시오.");
    if (paword.value !== confirmPaword.value) return alert("비밀번호가 일치하지 않습니다.");
    

    const req ={
        id: id.value,
        name: name.value,
        psword: psword.value,
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