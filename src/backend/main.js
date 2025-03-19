"use strict";
import {User, Shop} from "./classes.js"
import {updateUser} from "../database/repositoryUser.js";
import {repositoryShop} from "../database/repositoryShop.js";
import {get_all_shops} from "../database/repositoryShop.js";

/* test user insertion
const u1 = new User("aaa@gmail.com", "aaa", "prova");
repositoryUser(u1)
 */

// test shop insertion
//const s1 = new Shop("forno a", "via prova", "3493405", "spicy");
//repositoryShop(s1)

get_all_shops()
    .then(res => {console.log(res)})
    .catch(err => console.log(err));

//console.log(get_all_shops());
//console.log(get_all_bags());