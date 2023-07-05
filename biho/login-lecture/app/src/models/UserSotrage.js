"use strict";

class UserStorage {
    static #users = {
        id: ["jjb2222", "정비호", "김주영"],
        psword: ["1234", "2643", "1230"],
        name: ["정비호", "김주영", "주영김"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}
module.exports = UserStorage;