const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new mongoose.Schema(
  {
    // Schema for Category to list onto the UserMain page so that user can find an existing category or create a new one
    category: {
      type: String,
      required: [true, "category name is required"],
      minlength: [3, "category must be at least 3 characters"],
      products: [
        {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports.Category = mongoose.model("Category", CategorySchema);
