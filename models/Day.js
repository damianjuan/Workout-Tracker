const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DaySchema = new Schema({
    day: {
        type: Date,
        unique: true
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercises"
        }
    ]
});

const Day = mongoose.model("Day", DaySchema);

module.exports = Day;
