import { Schema } from "mongoose";

export const refreshTokenSchema = new Schema(
  {
    refresh: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: "15d",
    },
  },
  {
    _id: false,
  },
);
