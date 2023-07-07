const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    productAmount: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
