"use strict";

let dict = {}
let x = "mela"
dict[x] = dict[x] + 5||5
console.log(dict)

delete dict[x];

console.log(dict)