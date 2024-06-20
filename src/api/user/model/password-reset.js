import { Schema } from "mongoose";

export const passwordResetSchema = new Schema(
  {
    code: {
      type: String,
      default: null,
    },
    time: {
      type: Date,
      default: null,
    },
  },
  {
    _id: false,
  },
);
