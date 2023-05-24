import { Schema, model } from "mongoose";

const CartSchema = Schema({
  userId: {
    type: String,
    required: true,
  },
  products: [
    {
      prodctId: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});

module.exports = model("Cart", CartSchemas);
