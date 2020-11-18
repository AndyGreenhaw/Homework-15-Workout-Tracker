const Workout = require("../models/workout.js")

module.exports = function (app) {

////////////////////////////////////
// GET ROUTE for Getting Workouts //
////////////////////////////////////

    app.get("/api/workouts", async function(req,res) {
    Workout.find()
        .then(data => {
            res.json(data)
            // console.log(data)
        })
        .catch(err => {
            res.json(err)
        })
    })

//////////////////////////////
// GET ROUTE for Stats Page //
//////////////////////////////
    app.get("/api/workouts/range", async function(req,res){
    Workout.find().limit(7)
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

////////////////
// POST ROUTE //
////////////////
  
    app.post("/api/workouts", async function(req,res){
        console.log(req.body)
        console.log(req.params.id)
    
        Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout)
        }).catch(err => {
            res.status(400).json(err)
        })
    })


///////////////
// PUT ROUTE //
///////////////

    app.put("/api/workouts/:id", function(req,res){

    Workout.findOneAndUpdate(req.params.id, req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
    })

}