import { db } from "./initDb.js";
import {User} from "../backend/classes.js";

export function get_all_user() {
    return new Promise((resolve, reject) => {
        const sql = "Select * from USER"
        let result = []
        db.each(sql, (err, row) => {
            if (err) reject(err);
            result.push(new User(row.id, row.email, row.username, row.password));
        }, (err) => {
            resolve(result)
        });
    })
}

export function get_user_by_id(id) {
    return new Promise((resolve, reject) => {
        const sql = "Select * from USER WHERE id=?"

        db.each(sql,[id], (err, row) => {
            if (err) reject(err);
            resolve(new User(row.id, row.email, row.username, row.password));
        });
    })
}

export function get_user_by_email(email) {
    return new Promise((resolve, reject) => {
        const sql = "Select * from USER WHERE email=?"

        db.each(sql,[email], (err, row) => {
            if (err) reject(err);
            resolve(new User(row.id, row.email, row.username, row.password));
        });
    })
}

export function insertUser(user) {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO USER (email, username, password) VALUES (?, ?, ?)"

        db.run(sql,[user.email, user.username, user.password], (err) => {
            if (err) reject(err)
            console.log("User inserted successfully: \n");
            console.log(user);
            resolve(user);
        });
    })
}

export function updateUser(user) {
    return new Promise((resolve, reject) => {
        const sql = `
        UPDATE USER
        set 
            email = ?,
            username = ?,
            password = ?
        where
            id = ?
        `
        db.run(sql,[user.email, user.username, user.password, user.id], (err) => {
            if (err) reject(err)
            console.log("User updated successfully: \n");
            console.log(user);
            resolve(user);
        });
    })
}

export function deleteUser(user) {
    return new Promise((resolve, reject) => {
        const sql = `delete from USER where id = ?`
        db.run(sql,[user.id], (err) => {
            if (err) reject(err)
            console.log("User deleted successfully: \n");
            console.log(user);
            resolve(user);
        });
    })
}