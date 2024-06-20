import mongoose from "mongoose";

export const contactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
  },
  {
    _id: false,
  },
);
