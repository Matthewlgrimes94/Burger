const db = require('../../models');

$.get("/", function(req, res){
    db.burger.findAll(function(result){
        res.render({burgers: result});
    })
});

$.put("/api/burger", function(req, res){
    db.burger.insertOne(function(result){
    });
});