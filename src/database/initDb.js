"use strict"
import sqlite from "sqlite3";


export function initDb() {
    return new sqlite.Database("./database/surplusfile.sqlite", sqlite.OPEN_READWRITE, err => {if (err) throw err;});
}