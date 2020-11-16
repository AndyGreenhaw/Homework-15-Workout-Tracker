const Workout = require("../models/workout.js")

module.exports = function (app) {
    
// GET ROUTE for Getting Workouts
app.get("/api/workouts", function(req,res) {
    Workout.find()
        .then(data => {
            res.json(data)
            // console.log(data)
        })
        .catch(err => {
            res.json(err)
        })
    })


// PUT ROUTE for Saving Workouts???
app.put("/api/workouts/:id", function(req,res){
    var id = req.params.id
    var data = req.body
    // console.log(id);
    // console.log(data);

    Workout.insert(data)
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
  })

// POST ROUTE for Posting New Workouts???
  app.post("/api/workouts", function(req,res){
      var id = req.params.id
    var data = req.data

    Workout.create()
        .then(dbWorkout => {
            res.json(dbWorkout)
        }).catch(err => {
            res.status(400).json(err)
        })
  })

}