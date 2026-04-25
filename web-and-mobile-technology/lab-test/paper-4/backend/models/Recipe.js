import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Recipe title is required"],
      trim: true,
    },
    cuisine: {
      type: String,
      required: [true, "Cuisine is required"],
      trim: true,
    },
    ingredients: {
      type: String,
      required: [true, "Ingredients are required"],
      trim: true,
    },
    imageUrl: {
      type: String,
      default: "",
      trim: true,
    },
    // TODO (Task 02): Add prepTime (Number) and difficulty (String Enum) fields here
    // prepTime: {
    //   type: Number,
    //   required: [true, "Prep time is required"],
    // },
    // difficulty: {
    //   type: String,
    //   enum: ['Easy', 'Medium', 'Hard'],
    //   required: [true, "Difficulty is required"],
    // }
  },
  { timestamps: true }
);

export default mongoose.model("Recipe", recipeSchema);
