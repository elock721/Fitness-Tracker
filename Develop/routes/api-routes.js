// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({})
      .then(function(dbWorkout) {
        res.json(dbWorkout);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).limit(7)
      .then(function(dbWorkout) {
        res.json(dbWorkout);
      });
  });

  // Get route for retrieving a single Workout
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

  app.post("/api/workouts", function(req, res) {
    db.Workout.create({})
      .then(function(dbWorkout) {
        res.json(dbWorkout);
      });
  });

 
};
