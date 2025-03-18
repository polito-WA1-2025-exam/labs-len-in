"use strict";
export {User, Shop, Item, Bag};

function User(email, username, password) {
    this.email = email;
    this.username = username;
    this.password = password;
}

function Shop(name, address, phone, foodType){
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.foodType = foodType;
}


function Item(name, qty){
    this.name = name;
    this.qty = qty;
}

export function string_to_product(tuple){
    const [name, qty] = tuple.replaceAll("(", "").replaceAll(")", "").split(" ");
    return new Item(name, Number(qty) || 1);
}

const createBag =
    "type VARCHAR(20) CHECK (type IN ('surprise', 'regular') ) NOT NULL," +
    "items VARCHAR(255) NOT NULL," +
    "date DATE NOT NULL," +
    "size VARCHAR(1) CHECK (size IN ('S','M','L') ) NOT NULL," +
    "status VARCHAR(80) CHECK (status IN ('available', 'reserved') ) NOT NULL," +
    "price FLOAT NOT NULL," +
    "storeId INT NOT NULL," +
    "FOREIGN KEY (storeId) REFERENCES SHOP(id)" +
    ");";

function Bag(isSurprise, listItem, price, size, storeName, date, status){
    this.isSurprise = isSurprise;
    this.listItem = listItem;
    this.price = price;
    this.storeName = storeName;
    this.date = date;
    this.size = size;
    this.status = status

    this.addProduct = (name, qty)=>{
        listItem[name] = listItem[name] + qty || qty
    }
    this.removeProduct = (name)=> {
        delete listItem[name]
    }
}

