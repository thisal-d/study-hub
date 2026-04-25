import { Link } from "react-router-dom";

function RecipeCard({ recipe, onDelete }) {
  // TODO (Task 02): Implement conditional badge for Difficulty
  /*
  let badgeClass = "";
  if (recipe.difficulty === "Easy") badgeClass = "badge-easy";
  else if (recipe.difficulty === "Medium") badgeClass = "badge-medium";
  else if (recipe.difficulty === "Hard") badgeClass = "badge-hard";
  */

  return (
    <div className="card">
      <img
        src={recipe.imageUrl || "https://via.placeholder.com/400x200?text=Recipe"}
        alt={recipe.title}
        className="card-image"
      />
      <h3>{recipe.title}</h3>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      
      {/* TODO (Task 02): Display Prep Time and Difficulty here */}
      {/* <p><strong>Prep Time:</strong> {recipe.prepTime} mins</p> */}
      {/* <p><strong>Difficulty:</strong> <span className={badgeClass}>{recipe.difficulty}</span></p> */}

      <p><strong>Ingredients:</strong></p>
      <p style={{ fontSize: '0.9rem', color: '#555' }}>{recipe.ingredients}</p>

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-recipe/${recipe._id}`}>Edit</Link>
        <button className="btn danger" onClick={() => onDelete(recipe._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
