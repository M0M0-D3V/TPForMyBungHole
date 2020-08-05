const mongoose = require("mongoose");

const PurchaseHistorySchema = new mongoose.Schema(
  {
    date: Date,
    purchasedBy: [UserSchema],
  },
  { timestamps: true }
);

const PurchaseHistory = mongoose.model(
  "PurchaseHistory",
  PurchaseHistorySchema
);

module.exports = PurchaseHistory;
