import mongoose from "mongoose";
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    gigId: { type: Schema.Types.ObjectId, ref: "Gig", required: true },
    sellerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    buyerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    sellerName: { type: String, required: true },
    buyerName: { type: String, required: true },
    image: { type: String, required: false },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    isCompleted: { type: Boolean, default: false },
    payment_intent: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", OrderSchema);
