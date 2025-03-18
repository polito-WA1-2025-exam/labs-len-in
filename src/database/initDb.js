"use strict"

import sqlite from "sqlite3";
import {Bag, Shop, Item, string_to_product} from "../backend/classes.js";

export const db = initDb();

export function initDb() {

    return new sqlite.Database(
        "../database/surplusfile.sqlite",
        sqlite.OPEN_READWRITE
    );
}

