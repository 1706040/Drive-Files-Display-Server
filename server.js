const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

let contents;

fs.readdir("../../../../", {withFileTypes : true}, (err, data) => {
    if(err) throw err;
    let files = data.map((file) => {
        return {
            name : file.name,
            type : file.isDirectory() ? 'folder' : 'file'
        };
    });
    contents = files;
    // console.log(contents);
});

app.get("/", (req, res) => {
    res.json(contents);
});

app.listen(8080);

