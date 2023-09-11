const express = require("express");
const router = express.Router();
const {PersonController} = require("./../controllers");

router.get("/", (req, res) => {
  resposne(res, 200, {
    data: {
      message: "Welcome to persons API",
    },
  });
});

router.post("/", (req, res) => {
  resposne(res, 200, {
    data: {
      message: "Welcome to persons API",
    },
  });
});

router.put("/", (req, res) => {
  resposne(res, 200, {
    data: {
      message: "Welcome to persons API",
    },
  });
});

router.delete("/", (req, res) => {
  resposne(res, 200, {
    data: {
      message: "Welcome to persons API",
    },
  });
});

module.exports = router;
