"use strict"

import sqlite from "sqlite3";
import {Bag, Shop, Item, string_to_product} from "../backend/classes.js";

const db = initDb();

export function initDb() {

    return new sqlite.Database(
        "../database/surplusfile.sqlite",
        sqlite.OPEN_READWRITE
    );
}

function row_to_shop(row){
    return new Shop(row.id, row.name, row.address, row.phone, row.foodType)
}

function row_to_bag(row){
    const items = row.items.trim().split(",");
    let products = {};
    for (let i = 0; i < items.length; i++) {
        let curItem = string_to_product(items[i]);
        products[curItem.name] = curItem.qty;
    }
    return new Bag(row.id, row.type === "surprise", products, row.price, row.size, row.shopId, row.date, row.status)
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