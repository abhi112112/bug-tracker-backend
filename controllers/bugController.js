const Bug = require("../models/Bug");

// CREATE BUG
exports.createBug = async (req, res) => {
  try {
    const { title, description, severity, assignedTo } = req.body;

    const bug = await Bug.create({
      title,
      description,
      severity,
      assignedTo,
      createdBy: req.user.id   // from middleware 🔥
    });

    res.status(201).json({ msg: "Bug created", bug });
  } catch (error) {
    res.status(500).json({ msg: "Error creating bug", error });
  }
};
// GET ALL BUGS
exports.getBugs = async (req, res) => {
  try {
    const bugs = await Bug.find()
      .populate("createdBy", "name email")
      .populate("assignedTo", "name email");

    res.json(bugs);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching bugs" });
  }
};