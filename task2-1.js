var mysql = require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "myDataBase"
});

con.connect(function(err){
    if(err) throw err;
})

function createDatabase(dbname){
    con.query(`CREATE DATABASE ${dbname};`,function (err){
        if(err) throw err;
    });
};

function createTable(){
    con.query(`CREATE TABLE employees(id PRIMARY KEY Auto-increment, name VARCHAR(255), department VARCHAR(100), salary DECIMAL(10,2));`,function (err){
        if(err) throw err;
    });
}