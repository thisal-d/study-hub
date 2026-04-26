import { useState } from "react";

function StudentForm({ initialValues, onSubmit, submitText }) {
  const [formData, setFormData] = useState(
    initialValues || {
      fullName: "", faculty: "", year: "", email: "", imageUrl: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, year: Number(formData.year) });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>{submitText}</h2>

      <label>Full Name</label>
      <input name="fullName" value={formData.fullName} onChange={handleChange} required />

      <label>Faculty</label>
      <input name="faculty" value={formData.faculty} onChange={handleChange} required placeholder="e.g. Computing" />

      <label>Year</label>
      <input type="number" name="year" min="1" max="4" value={formData.year} onChange={handleChange} required />

      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />


      <label>Photo URL (optional)</label>
      <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} />

      <button className="btn primary" type="submit">{submitText}</button>
    </form>
  );
}

export default StudentForm;
