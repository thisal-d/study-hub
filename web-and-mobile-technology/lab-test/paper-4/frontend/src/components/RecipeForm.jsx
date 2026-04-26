import { useState } from "react";

function RecipeForm({ initialValues, onSubmit, submitText }) {
  const [formData, setFormData] = useState(
    initialValues || {
      title: "",
      cuisine: "",
      ingredients: "",
      imageUrl: "",
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
    });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>{submitText}</h2>

      <label>Recipe Title</label>
      <input name="title" value={formData.title} onChange={handleChange} required />

      <label>Cuisine</label>
      <input name="cuisine" value={formData.cuisine} onChange={handleChange} placeholder="e.g. Italian, Indian" required />

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
