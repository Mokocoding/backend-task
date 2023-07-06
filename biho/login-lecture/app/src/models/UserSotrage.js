"use strict";

const db = require("../config/db");

class UserStorage {
    static getUserInfo(id) {
        return new Promise((reslove, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                reslove(data[0]);
            });
        });
    }



    static async save(userInfo) {
        return new Promise((reslove, reject) => {
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
            db.query(
                query, 
                [userInfo.id, userInfo.name, userInfo.psword], 
                (err) => {
                    if (err) reject(`${err}`);
                    reslove({ success: true });
            });
        });
    }
}

module.exports = UserStorage;