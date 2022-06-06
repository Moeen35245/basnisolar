import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const ProductSchema = new mongoose.Schema({
  price: {
    type: String,
    required: true,
  },
  DiscPrice: {
    type: String,
  },
  warranty: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  compony: {
    type: String,
    required: true,
  },
  catagory: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
