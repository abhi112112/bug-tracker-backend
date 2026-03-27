const express = require("express");
const router = express.Router();

const { createBug, getBugs, updateBugStatus, filterBugs } = require("../controllers/bugController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createBug);
router.get("/", authMiddleware, getBugs);
router.put("/:id", authMiddleware, updateBugStatus);

module.exports = router;
router.put("/update/:id", authMiddleware, updateBugStatus);
const { assignBug } = require("../controllers/bugController");
router.put("/assign/:id", authMiddleware, assignBug);
const { getMyBugs } = require("../controllers/bugController");

router.get("/my-bugs", authMiddleware, getMyBugs);
router.get("/filter", authMiddleware, filterBugs);
const { deleteBug } = require("../controllers/bugController");

router.delete("/:id", authMiddleware, deleteBug);