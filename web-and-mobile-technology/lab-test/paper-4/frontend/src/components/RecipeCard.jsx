import { Link } from "react-router-dom";

function RecipeCard({ recipe, onDelete }) {

  return (
    <div className="card">
      <img
        src={recipe.imageUrl || "https://via.placeholder.com/400x200?text=Recipe"}
        alt={recipe.title}
        className="card-image"
      />
      <h3>{recipe.title}</h3>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>


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
