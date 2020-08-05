const mongoose = require("mongoose");

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
    onSale: Boolean,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
