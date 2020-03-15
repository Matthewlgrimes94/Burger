const orm = require("../config/orm.js");

let burger = {
    findAll: function(cb){
        orm.findAll(function(res){
            cb(res);
        });
    },
    insertOne: function(burgerName, cb){
        orm.insertOne(burgerName, function(res){
            cb(res);
        });
    },
    updateOne: function(id, cb){
        orm.updateOne(id, function(res){
            cb(res);
        });
    }
};

module.exports = burger;