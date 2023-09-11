const express = require("express");
const router = express.Router();
const { PersonController } = require("./../controllers");

router.get("/:id", (req, res) => {
  PersonController.getById(req, res);
});

router.post("/", (req, res) => {
  PersonController.create(req, res);
});

router.put("/:id", (req, res) => {
  PersonController.update(req, res);
});

router.delete("/:id", (req, res) => {
  PersonController.delete(req, res);
});

module.exports = router;
