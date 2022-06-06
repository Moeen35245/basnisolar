import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
    required: [true, "Please specify provide a number"],
  },
  address: {
    type: String,
    required: [true, "Please Provide text"],
  },
  message: {
    type: String,
  },
});

export default mongoose.models.Form || mongoose.model("Form", FormSchema);
