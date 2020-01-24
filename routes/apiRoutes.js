const path = require("path");
const fs = require("fs");


module.exports = function(app) {

    // Need to determine what req.body will look like
    app.post("/api/notes", function(req, res) {
        let notesArr = require("../db/db.json");
        let file = path.join(__dirname , "../db/db.json");
        let note = req.body;
        let notes = [];
        if (Object.keys(notesArr).length !== 0) {
            notes = notesArr;
        };
        notes.push(note);
        fs.writeFile(file, JSON.stringify(notes), err => {
            if (err) throw err;
        });
        res.send(true);
    });
    app.get("/api/notes", function(req, res) {
        let notes = req.body;
        res.json(notes);
    });
    




}