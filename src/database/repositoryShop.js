import { db } from "./initDb.js";
import {Shop} from "../backend/classes.js";

function row_to_shop(row){
    return new Shop(row.id, row.name, row.address, row.phone, row.foodType)
}

export function get_all_shops() {
    return new Promise((resolve, reject) => {
        let res = [];
        db.each("SELECT * FROM SHOP", (err, row) => {
            if (err) reject(err);
            res.push(row_to_shop(row));
        }, (err) => {
            resolve(res);
        });
    })
}

export function insert_shop(shop) {
    const sql = "INSERT INTO SHOP (name, address, phone, foodType) VALUES (?, ?, ?, ?)"

    db.run(sql,[shop.name, shop.address, shop.phone, shop.foodType], (err) => {
        if (err) console.error("Error inserting shop:", err);
        else console.log("Shop inserted successfully: \n");
    });
}

export function update_shop(shop) {
    const sql = `
    UPDATE SHOP
    SET name = ?, address = ?, phone = ?, foodType = ?
    WHERE id = ?
`
    db.run(sql, [shop.name, shop.address, shop.phone, shop.foodType, shop.id], (err) => {
        if (err) console.error("Error updating shop:", err);
    })

}