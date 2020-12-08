const Workout = require("../models");
const router = require("express").Router()

router.get("/api/workouts", (req, res) => {
    Workout.find().then(workout => res.json(workout));
});

router.post("/api/workouts", (req, res) => {
    Workout.create().then(workout => res.json(workout));
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find().then(workout => res.json(workout))
});

module.exports = router;
