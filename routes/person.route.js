const express = require("express");
const router = express.Router();
const { PersonController } = require("./../controllers");

router.get("/", (req, res) => {
  PersonController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  PersonController.getById(req, res);
});

router.post("/", (req, res) => {
  PersonController.create(req, res);
});

router.put("/", (req, res) => {
  PersonController.update(req, res);
});

router.delete("/", (req, res) => {
  PersonController.delete(req, res);
});

module.exports = router;
