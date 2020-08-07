var db = require("../models");

// Routes
module.exports = function(app) {

  // GET route for workouts
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({})
      .then(function(dbWorkout) {
        res.json(dbWorkout);
      });
  });

  // GET route for returning range
  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).limit(7)
      .then(function(dbWorkout) {
        res.json(dbWorkout);
      });
  });

  // PUT route for retrieving a single Workout
  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.findByIdAndUpdate(
        req.params.id, 
        {$push: {exercises: req.body}},
        {new: true}
    )
      .then(function(dbWorkout) {
        res.json(dbWorkout);
      });
  });
  // POST route for workouts 
  app.post("/api/workouts", function(req, res) {
    db.Workout.create({})
      .then(function(dbWorkout) {
        res.json(dbWorkout);
      });
  });

 
};
