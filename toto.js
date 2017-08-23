let fs = require("fs");

fs.writeFile("toto.txt", "Salute !", function(err) {
    if (err) return console.log(err);
});
fs.readdir("./", function(err, files) {
    if (err) return console.log(err);
    else console.log(files);
})