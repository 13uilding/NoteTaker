module.exports = function(app) {

    app.post("/api/notes", function(req, res) {
        note = req.body;
        console.log(note);
        res.send(true);
        // New comment line
    });
    // app.get("/api/notes", function(req, res) {
    //     console.log(notes)
    //     res.json(notes);
    // });
    




}