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
// UPDATE BUG STATUS
exports.updateBugStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const bug = await Bug.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!bug) {
      return res.status(404).json({ msg: "Bug not found" });
    }

    res.json({ msg: "Status updated", bug });

  } catch (err) {
    console.log(err); // 👈 IMPORTANT
    res.status(500).json({ msg: "Error updating status" });
  }
};
exports.assignBug = async (req, res) => {
  try {
    const { userId } = req.body;

    const bug = await Bug.findByIdAndUpdate(
      req.params.id,
      { assignedTo: userId },
      { new: true }
    ).populate("assignedTo", "name email");

    if (!bug) {
      return res.status(404).json({ msg: "Bug not found" });
    }

    res.json({ msg: "Bug assigned", bug });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error assigning bug" });
  }
};
exports.getMyBugs = async (req, res) => {
  try {
    const bugs = await Bug.find({ assignedTo: req.user.id })
      .populate("assignedTo", "name email");

    res.json({ bugs });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error fetching bugs" });
  }
};
exports.filterBugs = async (req, res) => {
  try {
    const { status } = req.query;

    const bugs = await Bug.find({
      assignedTo: req.user.id,
      status
    });

    res.json({ bugs });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error filtering bugs" });
  }
};
exports.deleteBug = async (req, res) => {
  try {
    const bug = await Bug.findByIdAndDelete(req.params.id);

    if (!bug) {
      return res.status(404).json({ msg: "Bug not found" });
    }

    res.json({ msg: "Bug deleted" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error deleting bug" });
  }
};