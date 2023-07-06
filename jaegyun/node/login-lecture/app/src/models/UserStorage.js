"use strict";

const { isatty } = require("tty");

const fs = require("fs").promises;  //promise가 수행하는 동작이 끝남과 동시에 상태를 알려준다. 비동기처리에 효과적

class UserStorage {
    static #getUserInfo(data , id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] =users[info][idx];
            return newUser;
        }, {});   
        
        return userInfo;
    }

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, fields) => {
            if(users.hasOwnProperty(fields)){
                newUsers[fields] =users[fields];
            }
            return newUsers;
        }, {});
        return newUsers; 

    }
    

    static getUsers(isAll, ...fields) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
               return this.#getUsers(data, isAll, fields);
            })
            .catch(console.error);     
    }

    static getUserInfo(id){
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
               return this.#getUserInfo(data, id);

            })
            .catch(console.error);

    }

    
    
    
    static async save(userInfo){
        const users = await this.getUsers(true); //데이터 추가
      
        if (users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다.";  
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true };
    }
}

module.exports = UserStorage;