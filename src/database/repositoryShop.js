import { db } from "./initDb.js";
import {Shop} from "../backend/classes.js";

function row_to_shop(row){
    return new Shop(row.id, row.name, row.address, row.phone, row.foodType)
}

export function get_all_shops() {
    let res = [];
    db.each("SELECT * FROM SHOP", (err, row) => {
        if (err) {
            console.log(err);
        }
        console.log(row);
        res.push(row_to_shop(row));
        console.log(res);
    }, (err, n) => {
        console.log(res);
    });
    return res;
}
export function repositoryShop(shop) {
    const sql = "INSERT INTO SHOP (name, address, phone, foodType) VALUES (?, ?, ?, ?)"

    db.run(sql,[shop.name, shop.address, shop.phone, shop.foodType], (err) => {
        if (err) console.error("Error inserting shop:", err);
        else console.log("Shop inserted successfully: \n");
    });

}

