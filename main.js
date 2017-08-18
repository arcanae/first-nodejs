// let fs = require('fs');


// fs.readFile('package.json', 'utf-8', function(error, data) {
//     console.log(data);
// });

let mysql = require('mysql');
let http = require('http');

let con = mysql.createConnection({
    host: "localhost",
    user: "nodejs",
    password: "nodejs",
    database: "first_db"
});

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    con.connect(function(err) {
        if (err) throw err;
        con.query('SELECT * FROM puppy', function(err, result) {
            if (err) throw err;
            res.write(JSON.stringify(result));
            res.end();
        });
    });
}).listen(8080);