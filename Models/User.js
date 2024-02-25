import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Shipper", "Carrier", "Dispatcher", "Broker", "Admin", "Other"],
    required: true,
  },
  companyAddress: {
    type: String,
  },
  supportingDocuments: {
    type: String,
    enum: ["Recieved", "Not-Recieved"],
    required: true,
  },
  isVerified: {
    type: Boolean,
    enum: [true, false],
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
