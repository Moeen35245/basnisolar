import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide a email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
});

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
