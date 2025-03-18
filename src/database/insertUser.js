import { initDb } from "./initDb.js";

export function insertUser(user) {
    const db = initDb();
    const sql = "INSERT INTO USER (email, username, password) VALUES (?, ?, ?)"

    db.run(sql,[user.email, user.username, user.password], (err) => {
        if (err) console.error("Error inserting user:", err);
        else console.log("User inserted successfully: \n");
    });
    db.close()
}

