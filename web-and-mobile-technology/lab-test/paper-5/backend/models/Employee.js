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
    },
    // TODO (Task 02): Add department and salary fields here
    // department: {
    //   type: String,
    //   enum: ['HR', 'Engineering', 'Marketing', 'Sales'],
    //   required: [true, "Department is required"],
    // },
    // salary: {
    //   type: Number,
    //   required: [true, "Salary is required"],
    //   min: [0, "Salary cannot be negative"],
    // }
  },
  { timestamps: true }
);

export default mongoose.model("Employee", employeeSchema);
