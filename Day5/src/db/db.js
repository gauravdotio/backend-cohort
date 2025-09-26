const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(
      "mongodb+srv://COHORT:JpLcFFkYOjYJtL9t@cluster0.5amco.mongodb.net/cohort"
    )
    .then(() => {
      console.log("Connected to DB");
    });
}

module.exports = connectDB;
