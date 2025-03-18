"use strict";
import {get_all_shops, get_all_bags, initDb} from "../database/initDb.js";
import {User, Shop} from "./classes.js"
import {repositoryUser} from "../database/repositoryUser.js";
import {repositoryShop} from "../database/repositoryShop.js";

/* test user insertion
const u1 = new User("aaa@gmail.com", "aaa", "prova");
repositoryUser(u1)
 */

// test shop insertion
const s1 = new Shop("forno a", "via prova", "3493405", "spicy");
repositoryShop(s1)
//Error: id is set to <null>

//console.log(get_all_shops());
//console.log(get_all_bags());