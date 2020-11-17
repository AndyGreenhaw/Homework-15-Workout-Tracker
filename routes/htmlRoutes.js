var path = require("path");

/////////////////////
// Laying Out HTML //
/////////////////////

module.exports = function(app){

    app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    // app.get("/id=:id", function (req, res) {
    // })
};