"use strict";
import express from 'express'

const apipath = "/api/v1/"

const app = express()
import {get_all_bags, get_bag_by_id, get_bags_by_store, insertBag} from "../database/repositoryBag.js";
import Json from "qs";

function start_server(){
    app.use(express.json())
    app.listen(3000, () => {
    console.log("Server Len.in() listening on port 3000")
})
    app.get(apipath+'bags/all', (req, res) => {
        get_all_bags().then(bags => {
            console.log(bags)
            res.send(bags)
        })
    })
    app.get(apipath+'bags/:id', (req, res) => {
        console.log(req.params['id'])
        get_bag_by_id(req.params['id']).then(
            bag => {
                console.log(bag)
                res.send(bag)
            }
        )
    })
    app.get(apipath+'bags/:status/store/:id', (req, res) => {
        console.log(req.params['id'], req.params['status'])
        get_bags_by_store(req.params['id'], req.params['status']).then(
            bags => {
                console.log(bags)
                res.send(bags)
            }
        )
    })
    app.post(apipath+'bags/new', (req, res) => {
        console.log(req.body)
        insertBag(req.body).then(
            bag => {
                console.log(bag)
                res.send(bag)
            }
        )
    })

}
start_server()


