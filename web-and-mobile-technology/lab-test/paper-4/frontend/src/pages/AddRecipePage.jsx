import { useNavigate } from "react-router-dom";
import RecipeForm from "../components/RecipeForm.jsx";
import { createRecipe } from "../api/recipeApi.js";

function AddRecipePage() {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    try {
      await createRecipe(formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to create recipe", error);
      alert("Failed to create recipe");
    }
  };

  return <RecipeForm submitText="Add Recipe" onSubmit={handleCreate} />;
}

export default AddRecipePage;
