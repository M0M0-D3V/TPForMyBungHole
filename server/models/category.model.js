const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    // Schema for Category to list onto the UserMain page so that user can find an existing category or create a new one
    category: {
      type: String,
      required: [true, "category name is required"],
      minlength: [3, "category must be at least 3 characters"],
    },
    product: [ProductSchema],
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
