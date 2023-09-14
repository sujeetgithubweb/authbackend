var express = require("express");
var router = express.Router();

var Project = require("../models/schema");
require("../config/dbConnect");

router.put("/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const updateData = req.body;

    const result = await Project.findOneAndUpdate(
      { email: email },
      updateData,
      { new: true }
    );

    if (!result) {
      console.log("No document found with the provided email.");
      return res.status(404).send("No document found with the name.");
    }

    console.log("Document updated successfully!");
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while updating the document.");
  }
});

module.exports = router;
