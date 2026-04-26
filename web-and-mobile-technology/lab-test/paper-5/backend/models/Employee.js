import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Employee name is required"],
      trim: true,
    },
    position: {
      type: String,
      required: [true, "Position is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
    },
    imageUrl: {
      type: String,
      default: "",
      trim: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Employee", employeeSchema);
