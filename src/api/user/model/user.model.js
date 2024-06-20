import { contactSchema } from "@/common/schema/model/contact-model.schema";
import mongoose, { Schema } from "mongoose";

import { passwordResetSchema } from "./password-reset";
import { refreshTokenSchema } from "./refresh-token";

const userSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    profileImg: {
      type: String,
    },
    password: { type: String, required: true, trim: true },
    contact: contactSchema,
    refreshToken: refreshTokenSchema,
    reset: passwordResetSchema,
    role: { type: Schema.Types.Number, ref: "Role", required: true },
  },
  {
    collection: "users",
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

export default User;
