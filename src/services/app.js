"use strict";
import express from 'express'
import { fileURLToPath } from 'url';
import path from 'path';

// Get the current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apipath = "/api/v1/"

const app = express()
import {
    buy_bag,
    get_all_bags,
    get_bag_by_id,
    get_bags_by_store,
    insertBag,
    update_bag,
} from "../database/repositoryBag.js";

import {
    get_all_shops,
    insert_shop,
    update_shop,
    get_shop_by_id
} from "../database/repositoryShop.js";

import {get_user_by_id, get_user_by_email, updateUser, deleteUser, insertUser, get_all_user} from "../database/repositoryUser.js"

import {Shop, User} from "../backend/classes.js";

function start_server(){
    app.use(express.json())
    app.listen(3000, () => {
    console.log("Server Len.in() listening on port 3000")
})
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
    })
    //GET all bags
    app.get(apipath+'bags/all', (req, res) => {
        get_all_bags().then(bags => {
            console.log(bags)
            res.send(bags)
        })
    })
    //GET bags by id
    app.get(apipath+'bags/:id', (req, res) => {
        console.log(req.params['id'])
        get_bag_by_id(req.params['id']).then(
            bag => {
                console.log(bag)
                res.send(bag)
            }
        )
    })
    //GET bags by status in (available, reserved) and by store
    app.get(apipath+'bags/:status/store/:id', (req, res) => {
        console.log(req.params['id'], req.params['status'])
        get_bags_by_store(req.params['id'], req.params['status']).then(
            bags => {
                console.log(bags)
                res.send(bags)
            }
        )
    })
    //POST a new bag
    app.post(apipath+'bags/new', (req, res) => {
        console.log(req.body)
        insertBag(req.body).then(
            bag => {
                console.log(bag)
                res.send(bag)
            }
        ).catch(err => {
            console.log(err)
            //degub
            res.status(500).send(err)
        })
    })

    //BUY a bag
    app.get(apipath+'bags/buy/:id', (req, res) => {
        console.log(req.params['id'])
        buy_bag(req.params['id']).then(
            bag => {
                console.log(bag)
                res.send(bag)
            }
        ).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    })

    //UPDATE a bag
    app.put(apipath+'bags/update/:id', (req, res) => {
        console.log(req.params['id'])
        update_bag(req.body).then(
            bag => {
                console.log(bag)
                res.send(bag)
            }
        ).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    })

    // SHOPS
    app.get(apipath+'shops/all', (req, res) => {
        get_all_shops()
            .then(shops => {
                res.send(shops)
            })
            .catch(err => {
                res.status(500).send(err)
            })
    })
    app.get(apipath+'shops/:id', (req, res) => {
        get_shop_by_id(req.params['id']).then(
            shop => {
                res.send(shop)
            }
        )
    })
    app.post(apipath+'shops/new', (req, res) => {
        if(!req.body.name || !req.body.address || !req.body.phone || !req.body.foodType){
            return res.status(400).send('Body is missing one of this fields: name, address, phone or foodType')
        }
        let shop = new Shop(0, req.body.name, req.body.address, req.body.phone, req.body.foodType)
        insert_shop(shop)
            .then(shop => {
                res.send(shop)
            })
            .catch(err => {console.log(err)})
    })

    app.put(apipath+'shops/update/:id', (req, res) => {
        if(!req.body.name || !req.body.address || !req.body.phone || !req.body.foodType){
            return res.status(400).send('Body is missing one of this fields: name, address, phone or foodType')
        }
        let shop = new Shop(req.params['id'], req.body.name, req.body.address, req.body.phone, req.body.foodType)
        update_shop(shop)
            .then(shop => {
                res.send(shop)
            })
            .catch(err => {console.log(err)})
    })

    //USERS
    app.get(apipath+'users/all', (req, res) => {
        get_all_user()
            .then(users => {res.send(users)})
            .catch(err => {
                console.log(err)
                return res.status(500).send(err)
            })
    })

    app.get(apipath+'users/id/:id', (req, res) => {
        get_user_by_id(req.params['id'])
            .then(user => res.send(user))
            .catch(err => {
                console.log(err)
                return res.status(500).send(err)
            })
    })
    app.get(apipath+'users/email/:email', (req, res) => {
        get_user_by_email(req.params['email'])
            .then(user => res.send(user))
            .catch(err => {
                console.log(err)
                return res.status(500).send(err)
            })
    })

    app.post(apipath+'users/new', (req, res) => {
        if(!req.body.email || !req.body.username || !req.body.password){
            return res.status(400).send("Body is missing one fields: name, username or password")
        }
        let user = new User(0, req.body.email, req.body.username, req.body.password)
        insertUser(user)
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                console.log(err)
                return res.status(500).send(err)
            })
    })
    app.put(apipath+'users/update/:id', (req, res) => {
        if(!req.body.email || !req.body.username || !req.body.password){
            return res.status(400).send("Body is missing one fields: name, username or password")
        }
        let user = new User(req.params['id'], req.body.email, req.body.username, req.body.password)
        updateUser(user)
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                console.log(err)
                return res.status(500).send(err)
            })
    })
    app.delete(apipath+'users/delete/:id', (req, res) => {
        let user = new User(req.params['id'], "", "", "")
        deleteUser(user)
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                console.log(err)
                return res.status(500).send(err)
            })
    })
}
start_server()


