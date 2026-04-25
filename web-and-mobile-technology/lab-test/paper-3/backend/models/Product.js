import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    brand: {
      type: String,
      required: [true, "Brand is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    imageUrl: {
      type: String,
      default: "",
      trim: true,
    },
    // TODO (Task 02): Add the stockQuantity field here
    // stockQuantity: {
    //   type: Number,
    //   required: [true, "Stock quantity is required"],
    //   min: [0, "Stock quantity cannot be negative"],
    // },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
