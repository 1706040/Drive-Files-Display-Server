const fs = require("fs");

fs.readdir("../../../../", {withFileTypes : true}, (err, data) => {
    if(err) throw err;
    let files = data.map((file) => {
        return {
            name : file.name,
            type : file.isDirectory() ? 'folder' : 'file'
        };
    });
    console.log(files);
});