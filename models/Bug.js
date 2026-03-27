const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
  title: String,
  description: String,
  severity: String,
  status: {
    type: String,
    default: "Open"
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  // ✅ ADD HERE
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null
  }

}, { timestamps: true });

module.exports = mongoose.model("Bug", bugSchema);
