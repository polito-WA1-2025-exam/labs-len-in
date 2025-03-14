"use strict"

import sqlite from "sqlite3";

export function initDb() {
    return new sqlite.Database(
        "./database/database.db",
        sqlite.OPEN_READWRITE,
    );
}