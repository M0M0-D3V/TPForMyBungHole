const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "category name is required"],
    minlength: [3, "category must be at least 3 characters"],
    products: [
      {
        product: {
          type: String,
          minlength: [3, "product name at least 3 characters"],
          brandname: String,
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
        },
      },
    ],
  },
});

const Purchase = mongoose.model("Purchase", CategorySchema);

module.exports = Purchase;
