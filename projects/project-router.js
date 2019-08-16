const express = require("express");

const Projects = require("./project-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching projecs from database" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.getById(id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching project from database" });
    });
});

module.exports = router;
