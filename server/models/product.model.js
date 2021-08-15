const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema(
  {
    brandname: {
      type: String,
      minlength: [3, "product name at least 3 characters"],
    },
    productprice: {
      type: Number,
      onSale: Boolean,
      get: (v) => Math.round(v * 100) / 100,
      set: (v) => Math.round(v * 100) / 100,
    },
    numberofunits: {
      type: Number,
      get: (v) => Math.floor(v),
      set: (v) => Math.floor(v),
    },
    purchasehistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "PurchaseHistory",
        price: this.productprice,
      },
    ],
  },
  { timestamps: true }
);

module.exports.Product = mongoose.model("Product", ProductSchema);
