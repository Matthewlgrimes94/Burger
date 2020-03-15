const express = require("express");
const burger = require("../models/burger.js");
const router = express.router();

router.get("/", function(req, res){
    burger.findAll(function(data){
        let hbsObject = {
            burgers: data
        }
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res){
    let burgerName = req.body;
    burger.insertOne(req.body, function(data){
        res.json({burger_name: data.burger_name});
    });
});

router.put("/api/burger/:id", function(req, res){
    let id = req.params.id;
    let newName = req.body.name;
    burger.updateOne(id, newName, function(result){
        res.send(200).end();
    });
});

module.exports = router;