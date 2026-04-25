import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecipeForm from "../components/RecipeForm.jsx";
import { getRecipeById, updateRecipe } from "../api/recipeApi.js";

function EditRecipePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const { data } = await getRecipeById(id);
        setRecipe(data);
      } catch (error) {
        console.error("Failed to fetch recipe", error);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleUpdate = async (formData) => {
    try {
      await updateRecipe(id, formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to update recipe", error);
      alert("Failed to update recipe");
    }
  };

  if (!recipe) return <p>Loading recipe details...</p>;

  return (
    <RecipeForm
      initialValues={recipe}
      submitText="Update Recipe"
      onSubmit={handleUpdate}
    />
  );
}

export default EditRecipePage;
