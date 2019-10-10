const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const storeSchema = new Schema(
  {
    storename: {
      unique: true,
      type: String,
      required: true,
      trim: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Store", storeSchema);
