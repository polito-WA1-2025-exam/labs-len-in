"use strict";
export {User, Store, Item, Bag};

function User(id, email, username){
    this.id = id;
    this.email = email;
    this.username = username;
}

function Store(id, name, address, phone_number, type){
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone_number = phone_number;
    this.type = type;
}


function Item(name, qty){
    this.name = name;
    this.qty = qty;
}

export function string_to_product(tuple){
    const [name, qty] = tuple.replaceAll("(", "").replaceAll(")", "").split(" ");
    return new Item(name, Number(qty) || 1);
}

function Bag(id, isSurprise, listItem, price, bSize, storeName, time, status){
    this.id = id;
    this.isSurprise = isSurprise;
    this.listItem = listItem;
    this.price = price;
    this.storeName = storeName;
    this.pickupTime = time;
    this.bSize = bSize;
    this.status = status

    this.addProduct = (name, qty)=>{
        listItem[name] = listItem[name] + qty || qty
    }
    this.removeProduct = (name)=> {
        delete listItem[name]
    }
}

