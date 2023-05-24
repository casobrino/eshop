import { Schema, model } from "mongoose";

const OrderSchema = Schema({
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
  amount: {
    type: Number,
    required: true,
  },
  adrres: {
    type: Object,
    required: true,
  },
  status: { type: String, default: "pending" },
});

module.exports = model("Order", OrderSchema);
