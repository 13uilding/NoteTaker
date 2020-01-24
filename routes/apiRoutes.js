var path = require("path");
var fs = require("fs");

module.exports = function(app) {

    // Need to determine what req.body will look like
    app.post("/api/notes", function(req, res) {
        note = JSON.stringify(req.body);
        console.log(note);
        console.log(path.join(__dirname , "../db/db.json"))
        fs.appendFileSync(path.join(__dirname , "../db/db.json"), note, err => {
            if (err) throw err;
            console.log("Wrote to db.json")
        });
        res.send(true);
        // New comment line
    });
    // app.get("/api/notes", function(req, res) {
    //     console.log(notes)
    //     res.json(notes);
    // });
    




}