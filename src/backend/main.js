"use strict";
import {get_all_shops, get_all_bags, initDb} from "../database/initDb.js";
import {User, Shop} from "./classes.js"
import {insertUser} from "../database/insertUser.js";
import {insertShop} from "../database/insertShop.js";

/* test user insertion
const u1 = new User("aaa@gmail.com", "aaa", "prova");
insertUser(u1)
 */

// test shop insertion
const s1 = new Shop("forno a", "via prova", "3493405", "spicy");
insertShop(s1)
//Error: id is set to <null>

//console.log(get_all_shops());
//console.log(get_all_bags());