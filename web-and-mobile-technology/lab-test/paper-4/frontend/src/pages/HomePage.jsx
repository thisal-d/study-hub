import { useEffect, useState } from "react";
import { deleteRecipe, getRecipes } from "../api/recipeApi.js";
import RecipeCard from "../components/RecipeCard.jsx";

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async () => {
    try {
      const { data } = await getRecipes();
      setRecipes(data);
    } catch (error) {
      console.error("Failed to fetch recipes", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this recipe?");
    if (!confirmed) return;

    try {
      await deleteRecipe(id);
      fetchRecipes();
    } catch (error) {
      console.error("Failed to delete recipe", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <section>
      <div className="hero">
        <h1>Recipe Collection</h1>
        <p>Explore, manage, and share your favorite culinary creations.</p>
      </div>

      {loading ? (
        <p>Loading recipes...</p>
      ) : recipes.length === 0 ? (
        <p>No recipes available. Add a new recipe from the menu.</p>
      ) : (
        <div className="grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </section>
  );
}

export default HomePage;
