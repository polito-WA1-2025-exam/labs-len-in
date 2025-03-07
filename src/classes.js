"use strict";

function User(email, username){
    this.email = email;
    this.username = username;
}

function Store(name, address, phone_number, type){
    this.name = name;
    this.address = address;
    this.phone_number = phone_number;
    this.type = type;
}


function Item(name, qty){
    this.name = name;
    this.qty = qty;
}

function Bag(isSurprise, listItem, price, bSize, storeName, timeRange){
    this.isSurprise = isSurprise;
    this.listItem = listItem;
    this.price = price;
    this.storeName = storeName;
    this.timeRange = timeRange;
    this.bSize = bSize;

    this.addProduct = (name, qty)=>{
        listItem[name] = listItem[name] + qty || qty
    }
    this.removeProduct = (name)=> {
        delete listItem[name]
    }
}

