//////////////////////////
// SERVER SETUP //
//////////////////////////
// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Setting Up Express
const PORT = process.env.PORT || 4444;
const app = express();

// Setting Up Morgan Middleware
app.use(logger("dev"));

// Configuring Express App
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Setting Up Mongo
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitnesstracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Setting Up Routes //
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
  
// Listen on PORT Listed Above (4444)
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });