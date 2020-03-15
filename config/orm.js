const connection = require("./connection.js");

let orm = {
    findAll: function(callback){
        connection.query("SELECT * FROM burgers", function(err, result){
            if(err) throw err;
            callback(result);
        });
    },

    insertOne: function(burgerName,callback){
        connection.query("INSERT INTO burgers SET ?", {burger_name: burgerName}, function(err, result){
            if(err) throw err;
            callback(result);
        });
    },

    updateOne: function(id,callback){
        connection.query("UPDATE burger_name WHERE ?", {id:id}, function(err, result){
            if(err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;