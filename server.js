const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4444

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//////////////////////////
// Setting Up API Route //
//////////////////////////
app.use(require("./public/workout"));

/////////////////////
// Laying Out HTML //
/////////////////////

app.get("/", (req, res) => {
res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});

//////////////////////////
// TODO: You will make six more routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// 1. Save a note to the database's collection
// POST: /submit

app.post("/api/workouts", (req, res) => {
  console.log(req.body)
})
  // 2. Retrieve all notes from the database's collection
  // GET: /all
  // ====================================================

  
  // 3. Retrieve one note in the database's collection by it's ObjectId
  // TIP: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
  // GET: /find/:id
  // ==================================================================
 
  
  // 4. Update one note in the database's collection by it's ObjectId
  // (remember, mongojs.ObjectId(IdYouWantToFind)
  // POST: /update/:id
  // ================================================================

  
  
  // 5. Delete one note from the database's collection by it's ObjectId
  // (remember, mongojs.ObjectId(IdYouWantToFind)
  // DELETE: /delete/:id
  // ==================================================================

  
  
  // 6. Clear the entire note collection
  // DELETE: /clearall
  // ===================================

  
  
  // Listen on port 3000
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });