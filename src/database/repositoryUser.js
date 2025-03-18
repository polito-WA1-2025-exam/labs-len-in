import { db } from "./initDb.js";

export function repositoryUser(user) {
    const sql = "INSERT INTO USER (email, username, password) VALUES (?, ?, ?)"

    db.run(sql,[user.email, user.username, user.password], (err) => {
        if (err) console.error("Error inserting user:", err);
        else console.log("User inserted successfully: \n");
    });

}

