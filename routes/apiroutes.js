const router = require("express").Router()
const db = require("../models")

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

router.post("api/workouts", (req, res) => {
    db.Workout.create({})
    .then(data => {
        console.log(data)
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

// GET /api/workouts/range
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router