"use strict";

class UserStorage {
    static #users ={ //#public한 변수를 private 변수로 선언
        id: ["jaegyun", "원개발", "박팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["정재균", "원동건", "박현우"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, fields) => {
            if(users.hasOwnProperty(fields)){
                newUsers[fields] =users[fields];
            }
            return newUsers;
        }, {});
        return newUsers; 
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] =users[info][idx];
            return newUser;
        }, {});   
        
        return userInfo;
    }
    
    static save(userInfo){
        const users =this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true};
    }
}

module.exports = UserStorage;