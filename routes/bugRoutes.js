const express = require("express");
const router = express.Router();

const { createBug, getBugs } = require("../controllers/bugController"); 
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createBug);
router.get("/", authMiddleware, getBugs);

module.exports = router;