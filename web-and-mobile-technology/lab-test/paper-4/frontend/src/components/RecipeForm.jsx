import { useState } from "react";

function RecipeForm({ initialValues, onSubmit, submitText }) {
  const [formData, setFormData] = useState(
    initialValues || {
      title: "",
      cuisine: "",
      ingredients: "",
      imageUrl: "",
      // TODO (Task 02): Add prepTime and difficulty to initial state
      // prepTime: "",
      // difficulty: "Easy", // Default value for dropdown
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      // TODO (Task 02): Parse prepTime as Number
      // prepTime: Number(formData.prepTime),
    });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>{submitText}</h2>

      <label>Recipe Title</label>
      <input name="title" value={formData.title} onChange={handleChange} required />

      <label>Cuisine</label>
      <input name="cuisine" value={formData.cuisine} onChange={handleChange} placeholder="e.g. Italian, Indian" required />

      {/* TODO (Task 02): Add Prep Time input field here */}
      {/* <label>Prep Time (minutes)</label> */}
      {/* <input type="number" name="prepTime" value={formData.prepTime} onChange={handleChange} min="1" required /> */}

      {/* TODO (Task 02): Add Difficulty dropdown field here */}
      {/* <label>Difficulty</label> */}
      {/* <select name="difficulty" value={formData.difficulty} onChange={handleChange} required>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select> */}

      <label>Ingredients (comma separated)</label>
      <textarea
        name="ingredients"
        rows="4"
        value={formData.ingredients}
        onChange={handleChange}
        required
      />

      <label>Image URL (optional)</label>
      <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} />

      <button className="btn primary" type="submit">{submitText}</button>
    </form>
  );
}

export default RecipeForm;
