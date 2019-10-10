const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    storename: { type: String, required: true },
    productname: { type: String, required: true },
    quantity: { type: String, required: true },
    date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Product", productSchema);
