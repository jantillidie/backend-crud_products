import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, default: 0 },
  currency: { type: String, default: "EUR" },
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
