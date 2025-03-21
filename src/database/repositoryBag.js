import { db } from "./initDb.js";
import {Bag, string_to_product} from "../backend/classes.js";

function row_to_bag(row){
    const items = JSON.parse(row.items);
    return new Bag(row.id, row.type === "surprise", items, row.price, row.size, row.storeId, row.date, row.status)
}

export async function get_all_bags(){

    return new Promise((resolve, reject) => {
        let res = [];
        db.each("SELECT * FROM BAG", (err, row) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            //console.log(row);
            res.push(row_to_bag(row));
        }, () => {
            resolve(res);
        })
    })

}

export function insertBag(bag) {
    return new Promise((resolve, reject) => {
        const sql =
            "INSERT INTO BAG(type, items, date, size, status, price, storeId) VALUES (?, ?, ?, ?, ?, ?, ?)"
        const type = bag.isSurprise ? "surprise" : "regular";
        console.log(JSON.stringify(bag.listItem))
        db.run(sql,[type, JSON.stringify(bag.listItem), bag.date, bag.size, bag.status, bag.price, bag.storeId],
            function (err) {
                if (err) {
                    console.error("Error inserting bag:", err);
                    reject(err);
                } else {
                    console.log(this.lastID);
                    bag.id = this.lastID;
                    resolve(bag);
                }
            });
    })

}

export function buy_bag(bagId) {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE BAG SET status = ? WHERE id = ?"
        db.run(sql,['reserved', bagId], (err) => {
            if (err){
                console.error("Error updating bag:", err);
                reject(err);
            }
        });
        get_bag_by_id(bagId).then(bag => {
            console.log("Bag updated successfully: \n");
            resolve(bag);
        })
    })

}

export function update_bag(bag) {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE BAG SET type = ?, items= ?, date= ?, size = ?, price = ? WHERE id = ?"
        const type = bag.isSurprise ? "surprise" : "regular";
        db.run(sql,[type, bag.listItem.toString(), bag.date, bag.size, bag.price, bag.id], (err, row) => {
            if (err){
                reject(err);
                console.error("Error updating bag", err);
            }
            else {
                resolve(row_to_bag(row));
            }
        })
    })
}


export function get_bags_by_store(storeId, status = 'available') {
    return new Promise((resolve, reject) => {
        let res = [];
        db.each("SELECT * FROM BAG WHERE storeId = ? AND status = ?", [storeId, status], (err, row) => {
            if (err) {
                reject(err);
                console.log(err);
            }
            console.log(row);
            res.push(row_to_bag(row));
        }, () => {
            resolve(res);
        })
    })

}

export function get_bag_by_id(id) {
    return new Promise((resolve, reject) => {
        let res = [];
        db.each("SELECT * FROM BAG WHERE id = ?", [id], (err, row) => {
                if (err) {
                    reject(err);
                    console.log(err);
                }
                console.log(row);
                res.push(row_to_bag(row));
            }, () => {
                resolve(res);
            }
        )
    })
}