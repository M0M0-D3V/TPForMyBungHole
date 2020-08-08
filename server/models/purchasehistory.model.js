const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PurchaseHistorySchema = new mongoose.Schema(
  {
    date: Date,
    purchasedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports.PurchaseHistory = mongoose.model(
  "PurchaseHistory",
  PurchaseHistorySchema
);
