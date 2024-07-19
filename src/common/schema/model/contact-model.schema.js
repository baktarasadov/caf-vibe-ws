import mongoose from "mongoose";

export const contactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
  },
  {
    _id: false,
  },
);
