const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);
  console.log("API_KEY:", process.env.GOOGLE_API_KEY);
  res.render("index", { CLIENT_ID: process.env.GOOGLE_CLIENT_ID, API_KEY: process.env.GOOGLE_API_KEY });
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
