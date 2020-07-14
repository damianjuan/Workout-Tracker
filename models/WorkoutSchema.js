const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [{
        type: {
            type: "String"
        },
        name: {
            type: String
        },
        duration: {
            type: Number
        },
        distance: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        }
    }],
    day: {
        type: Date,
        default: Date.now
    }

},
    {
        toJSON: {
            virtuals: true
        }
    });

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
