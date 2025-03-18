import { initDb } from "./initDb.js";

export function insertBag(bag) {
    const db = initDb();
    const sql = "INSERT INTO BAG (type, date, size, status, price, storeId) VALUES (?, ?, ?, ?, ?, ?)"
    const type = isSurprise ? "surprise" : "regular";
    const storeId = 1 // to do: call db to get corresponding storeId
    db.run(sql,[type, bag.date, bag.size, bag.status, bag.price, storeId], (err) => {
        if (err) console.error("Error inserting bag:", err);
        else console.log("Bag inserted successfully: \n");
    });
    db.close()
}

