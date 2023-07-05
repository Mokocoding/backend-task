"use strict"

const home = (req, res)=>{ //컨트롤러
    res.render("home/index");
};

const login = (req, res)=>{
    res.render("home/login");
}

module.exports = {
    home,
    login,
};