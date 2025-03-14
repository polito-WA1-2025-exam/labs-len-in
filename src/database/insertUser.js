import { initDb } from "./initDb.js";

export function insertUsers(email, username, password) {
    const db = initDb();
    const sql = "INSERT INTO USER (email, username, password) VALUES (?, ?, ?)"

    db.run(sql,[email, username, password], (err) => {
        if (err) console.error("Error inserting user:", err);
        else console.log("User inserted successfully");
    });
    db.close()
}

