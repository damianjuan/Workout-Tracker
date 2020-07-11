const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: String,
    name: String,
    duration: Int,
    weight: Int,
    reps: Int,
    sets: Int,
    distance: Int
});

const Exercises = mongoose.model("Exercises", ExerciseSchema);

module.exports = Exercises;
