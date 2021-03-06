const { Schema, model } = require("mongoose");

const ProductSchema = Schema(
  {
    title: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    available_quantity: {
      type: Number,
      require: true,
    },
    condition: {
      type: String,
      default: "new",
    },
    enable: {
      type: Boolean,
      default: true,
    },
    ts_create: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = model("products", ProductSchema);
