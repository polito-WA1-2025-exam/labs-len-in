"use strict";
export {User, Shop, Item, Bag};

function User(id, email, username, password) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.password = password;
}

function Shop(id, name, address, phone, foodType){
    this.id = id;
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

function Bag(id, isSurprise, listItem, price, size, storeId, date, status){
    this.id = id;
    this.isSurprise = isSurprise;
    this.listItem = listItem; //array of Item
    this.price = price;
    this.storeId = storeId;
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

