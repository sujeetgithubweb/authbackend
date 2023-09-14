var express = require("express");
var router = express.Router();

var Project = require("../models/schema");
// require("../config/dbConnect");


// POST user data
router.post("/", async (req, res) => {

  try {
    let data = new Project(req.body);
    let result = await data.save({});
    console.log(result);
    console.log("document inserted!");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
