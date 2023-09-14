var express = require("express");
var router = express.Router();

var Project = require("../models/schema");
require("../config/dbConnect");

// POST user login data
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  Project.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          massage: "Authentication failed user not found",
        });
      }
      if (user.password !== password) {
        return res.status(401).json({ message: "Authentication failed password error" });
      }

      res.status(200).json({ message: "Authentication successful", user });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error authenticating user", error: err });
    });
});

module.exports = router;
