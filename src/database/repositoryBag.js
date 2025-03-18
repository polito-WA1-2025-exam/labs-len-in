import { db } from "./initDb.js";
import {Bag, string_to_product} from "../backend/classes.js";

function row_to_bag(row){
    const items = row.items.trim().split(",");
    let products = {};
    for (let i = 0; i < items.length; i++) {
        let curItem = string_to_product(items[i]);
        products[curItem.name] = curItem.qty;
    }
    return new Bag(row.id, row.type === "surprise", products, row.price, row.size, row.shopId, row.date, row.status)
}

export function get_all_bags() {
    let res = [];
    db.each("SELECT * FROM BAG", (err, row) => {
        if (err) {
            console.log(err);
        }
        console.log(row);
        res.push(row_to_bag(row));
    }, (err, n) => {
        console.log(res);
    })
    return res;
}

export function insertBag(bag) {
    const sql = "INSERT INTO BAG (type, date, size, status, price, storeId) VALUES (?, ?, ?, ?, ?, ?)"
    const type = isSurprise ? "surprise" : "regular";
    const storeId = 1 // to do: call db to get corresponding storeId
    db.run(sql,[type, bag.date, bag.size, bag.status, bag.price, storeId], (err) => {
        if (err) console.error("Error inserting bag:", err);
        else console.log("Bag inserted successfully: \n");
    });

}

