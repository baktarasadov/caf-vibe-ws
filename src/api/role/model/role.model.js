import autoIncrementPlugin from "@/common/mongoose/plugins/auto-increment.plugin";
import mongoose, { Schema } from "mongoose";

const roleSchema = new Schema(
  {
    role: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
  },
  {
    collection: "roles",
    versionKey: false,
  },
).plugin(autoIncrementPlugin, { incField: "_id" });

const Role = mongoose.model("Role", roleSchema);

export default Role;
