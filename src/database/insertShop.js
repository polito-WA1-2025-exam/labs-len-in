import { initDb } from "./initDb.js";

export function insertShop(shop) {
    const db = initDb();
    const sql = "INSERT INTO SHOP (name, address, phone, foodType) VALUES (?, ?, ?, ?)"

    db.run(sql,[shop.name, shop.address, shop.phone, shop.foodType], (err) => {
        if (err) console.error("Error inserting shop:", err);
        else console.log("Shop inserted successfully: \n");
    });
    db.close()
}

