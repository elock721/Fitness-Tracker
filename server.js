var express = require("express");
let mongoose = require("mongoose");

// sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;


//sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static directory
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes 
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// listener 
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });