import { useState } from "react";

function BookForm({ initialValues, onSubmit, submitText }) {
  const [formData, setFormData] = useState(
    initialValues || {
      title: "",
      author: "",
      price: "",
      description: "",
      imageUrl: "",
      genre: ""
      // TODO (Task 02): Add genre to initial state
      // genre: "",
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
      price: Number(formData.price),
    });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>{submitText}</h2>

      <label>Book Title</label>
      <input name="title" value={formData.title} onChange={handleChange} required />

      <label>Author</label>
      <input name="author" value={formData.author} onChange={handleChange} required />

      <label>Price</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <label>Description</label>
      <textarea
        name="description"
        rows="4"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label>Genre</label>
      <input
        type="text"
        name="genre"
        value={formData.genre}
        onChange={handleChange}
        required
      />


      {/* TODO (Task 02): Add Genre input field here */}
      {/* <label>Genre</label> */}
      {/* <input name="genre" value={formData.genre} onChange={handleChange} required /> */}

      <label>Image URL</label>
      <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} />

      <button className="btn primary" type="submit">{submitText}</button>
    </form>
  );
}

export default BookForm;
