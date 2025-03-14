"use strict";
import {initDb} from "./database/initDb.js";
import {insertUsers} from "./database/insertUser.js";

//let db = initDb();
//db.close()

insertUsers("prova@gmail.com", "prova", "password")
