import { contactSchema } from "@/common/schema/model/contact-model.schema";
import mongoose, { Schema } from "mongoose";

import emailVerification from "./email-verification";
import { refreshTokenSchema } from "./refresh-token";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    profileImage: {
      type: String,
    },
    password: { type: String, required: true, trim: true },
    contact: contactSchema,
    token: refreshTokenSchema,
    emailVerification: {
      type: emailVerification,
      required: false,
    },
    passwordReset: {
      type: emailVerification,
      required: false,
    },
    role: { type: Schema.Types.Number, ref: "Role", required: true },
  },
  {
    collection: "users",
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

export default User;
