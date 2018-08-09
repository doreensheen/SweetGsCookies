var mysql = require("mysql");

var con = mysql.createConnection({
    port: 1000,
    host: "localhost",
    user: "root",
    password: "dsheen90",
    database: "cookie_gallery_db",
})

con.connect(function(err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected on thread " + con.threadId);
});

module.exports = con;