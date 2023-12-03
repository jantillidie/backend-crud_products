import mongoose from "mongoose";
import "./Review.js";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, default: 0 },
  currency: { type: String, default: "EUR" },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
