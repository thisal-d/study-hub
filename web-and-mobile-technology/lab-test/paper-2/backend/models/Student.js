import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    faculty: {
      type: String,
      required: [true, "Faculty is required"],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "Year is required"],
      min: [1, "Year must be at least 1"],
      max: [4, "Year cannot exceed 4"],
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
    },
    // TODO (Task 02): Add the GPA field here
    // gpa: {
    //   type: Number,
    //   required: [true, "GPA is required"],
    //   min: [0, "GPA cannot be less than 0.0"],
    //   max: [4, "GPA cannot exceed 4.0"],
    // },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
