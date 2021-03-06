const { Schema, model } = require("mongoose");

const UserSchema = Schema(
  {
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    verificationCode: {
      type: String,
      require: true,
    },
    shippingAddress: {
      type: Array,
      default: "new",
    },
    dataExpirationCode: {
      type: Boolean,
      default: true,
    },
    enable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = model("users", UserSchema);
