import { initDb } from "./initDb.js";
let db = initDb();
const createUser =
    "CREATE TABLE IF NOT EXISTS USER (" +
    "id INTEGER PRIMARY KEY AUTOINCREMENT," +
    "email VARCHAR(25) UNIQUE NOT NULL," +
    "username VARCHAR(25) NOT NULL," +
    "password VARCHAR(255) NOT NULL" +
    ");";
const createShop =
    "CREATE TABLE IF NOT EXISTS SHOP (" +
    "id INTEGER PRIMARY KEY AUTOINCREMENT," +
    "name VARCHAR(20) NOT NULL," +
    "address VARCHAR(255) NOT NULL," +
    "phone VARCHAR(20) NOT NULL," +
    "foodType VARCHAR(30)" +
    ");";

const createUserShop =
    "CREATE TABLE IF NOT EXISTS USERSHOP (" +
    "userId INT," +
    "shopId INT," +
    "FOREIGN KEY (userId) REFERENCES USER(id)," +
    "FOREIGN KEY (shopId) REFERENCES SHOP(id)," +
    "PRIMARY KEY (userId, shopId)" +
    ");";


const createBag =
    "CREATE TABLE IF NOT EXISTS BAG (" +
    "id INTEGER PRIMARY KEY AUTOINCREMENT," +
    "type VARCHAR(20) CHECK (type IN ('surprise', 'regular') ) NOT NULL," +
    "items VARCHAR(255) NOT NULL," +
    "date DATE NOT NULL," +
    "size VARCHAR(1) CHECK (size IN ('S','M','L') ) NOT NULL," +
    "status VARCHAR(80) CHECK (status IN ('available', 'reserved') ) NOT NULL," +
    "price FLOAT NOT NULL," +
    "storeId INT NOT NULL," +
    "FOREIGN KEY (storeId) REFERENCES SHOP(id)" +
    ");";

db.run(createShop, (err, rows) => {
    if(err) throw err;
    console.log("SHOP Table Successfully created");
})

db.run(createBag, (err, rows) => {
    if(err) throw err;
    console.log("BAG Table Successfully created");
})

db.run(createUser, (err, rows) => {
    if(err) throw err;
    console.log("USER Table Successfully created");
})

db.run(createUserShop, (err, rows) => {
    if(err) throw err;
    console.log("USERSHOP Table Successfully created");
})
