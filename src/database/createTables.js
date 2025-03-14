import {initDb} from "./initDb.js";

const db = initDb();

const createUser =
    "CREATE TABLE IF NOT EXISTS USER (" +
    "email VARCHAR(25) PRIMARY KEY," +
    "username VARCHAR(25) NOT NULL," +
    "password VARCHAR(255) NOT NULL" +
    ");";
const createShop =
    "CREATE TABLE IF NOT EXISTS SHOP (" +
    "id INT PRIMARY KEY," +
    "name VARCHAR(20) NOT NULL," +
    "address VARCHAR(255) NOT NULL," +
    "phone VARCHAR(20) NOT NULL," +
    "foodType VARCHAR(30)" +
    ");";

const createUserShop =
    "CREATE TABLE IF NOT EXISTS USERSHOP (" +
    "userEmail INT," +
    "shopId INT," +
    "FOREIGN KEY (userEmail) REFERENCES USER(email)," +
    "FOREIGN KEY (shopId) REFERENCES SHOP(id)," +
    "PRIMARY KEY (userEmail, shopId)" +
    ");";


const createBag =
    "CREATE TABLE IF NOT EXISTS BAG (" +
    "id INT PRIMARY KEY," +
    "type VARCHAR(20) CHECK (type IN ('reserved', 'Available') ) NOT NULL," +
    "items VARCHAR(255) NOT NULL," +
    "date DATE NOT NULL," +
    "size VARCHAR(1) CHECK (type IN ('S','M','L') ) NOT NULL," +
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