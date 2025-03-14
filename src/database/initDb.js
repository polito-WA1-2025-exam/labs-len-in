"use strict"

import sqlite from "sqlite3";

export function initDb() {
    return new sqlite.Database("./surplusfile.sqlite");
}