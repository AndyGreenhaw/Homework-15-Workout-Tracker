const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter a name for this workout type."
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for this workout."
    },
    duration: { 
        type: Number,
        required: "Enter a valid number for time."
    },
    weight: {
        type: Number,
        required: "Enter a valid number for weight."
    },
    reps: {
        type: Number,
        required: "Enter a valid number for reps."
    },
    sets: {
        type: Number,
        required: "Enter a valid number for sets."
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;