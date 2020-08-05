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

const ProductSchema = new mongoose.Schema(
  {
    brandname: {
      type: String,
      minlength: [3, "product name at least 3 characters"],
    },
    productprice: {
      type: Number,
      get: (v) => Math.round(v * 100) / 100,
      set: (v) => Math.round(v * 100) / 100,
    },
    numberofunits: {
      type: Number,
      get: (v) => Math.floor(v),
      set: (v) => Math.floor(v),
    },
    purchasehistory: [PurchaseHistorySchema],
    onSale: Boolean,
  },
  { timestamps: true }
);

const PurchaseHistorySchema = new mongoose.Schema(
  {
    date: Date,
    purchasedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
