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
      if (!projects[0]) {
        res.status(404).json({ message: "Invalid project id" });
      } else {
        res.status(200).json(projects);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching project from database" });
    });
});

router.post("/", (req, res) => {
  const project = req.body;

  Projects.add(project)
    .then(count => {
      res.status(201).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: "Error adding project to database" });
    });
});

module.exports = router;
