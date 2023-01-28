const express = require("express");

//creates a new Express.js server
const server = express();

server.set("view engine", "ejs");

// Routes
server.get("/", (req, res) => {
  res.render("index");
});

// listen for a GET request to "grades" path
server.get("/grades", (req, res) => {
  const { gradecount } = req.query;
  const parsedGradecount = parseInt(gradecount);
  if (parsedGradecount <= 0) {
  } else {
    res.render("grades", { gradecount });
  }
});

// listen for a GET request to "result" path
server.get("/reslut", (req, res) => {
  let total = 0;
  Object.values(req.query).forEach((grade) => {
    total += parseInt(grade);
  });
  let gradeCount = Object.keys(req.query).length;
  const reslut = Math.floor(total / gradeCount);
  res.render("reslut", { reslut });
});

// Setup the server to listen to port 3000
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});

//  Middleware for css
var path = require("path");
server.use(express.static(path.join(__dirname, "public")));
