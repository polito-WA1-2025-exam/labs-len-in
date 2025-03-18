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
    const sql = "INSERT INTO BAG(type, items, date, size, status, price, storeId) VALUES (?, ?, ?, ?, ?, ?, ?)"
    const type = bag.isSurprise ? "surprise" : "regular";
    db.run(sql,[type, bag.listItem.toString(), bag.date, bag.size, bag.status, bag.price, bag.storeId], (err) => {
        if (err) console.error("Error inserting bag:", err);
        else console.log("Bag inserted successfully: \n");
    });
}

export function bought_Bag(bagId) {
    const sql = "UPDATE BAG SET status = ? WHERE id = ?"
    db.run(sql,['reserved', bagId], (err) => {
        if (err) console.error("Error updating bag:", err);
        else console.log("Bag updated successfully: \n");
    });
}

export function update_bag(bag) {
    const sql = "UPDATE BAG SET type = ?, items= ?, date= ?, size = ?, price = ? WHERE id = ? and status = ?"
    const type = bag.isSurprise ? "surprise" : "regular";
    db.run(sql,[type, bag.listItem.toString(), bag.date, bag.size, bag.price, bag.id, 'available'], (err) => {
        if (err) console.error("Error updating bag", err);
        else console.log(`Bag ${bag.id} updated successfully: \n`);
    });
}


export function get_bags_by_store(storeId, status = 'available') {
    let res = [];
    db.each("SELECT * FROM BAG WHERE storeId = ? AND status = ?", [storeId, status], (err, row) => {
        if (err) {
            console.log(err);
        }
        console.log(row);
        res.push(row_to_bag(row));
    })
    return res;
}

export function get_bag_by_id(id) {
    let res = [];
    db.each("SELECT * FROM BAG WHERE id = ?", [id], (err, row) => {
        if (err) {
            console.log(err);
        }
        console.log(row);
        res.push(row_to_bag(row));
    })
    return res;
}