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
}

module.exports = UserStorage;