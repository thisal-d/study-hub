import { useState } from "react";

function EmployeeForm({ initialValues, onSubmit, submitText }) {
  const [formData, setFormData] = useState(
    initialValues || {
      name: "",
      position: "",
      email: "",
      imageUrl: "",
      // TODO (Task 02): Add department and salary to initial state
      // department: "Engineering", // Provide a default enum value
      // salary: "",
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
      // TODO (Task 02): Parse salary as Number
      // salary: Number(formData.salary),
    });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>{submitText}</h2>

      <label>Employee Name</label>
      <input name="name" value={formData.name} onChange={handleChange} required />

      <label>Position</label>
      <input name="position" value={formData.position} onChange={handleChange} required />

      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      {/* TODO (Task 02): Add Department dropdown field here */}
      {/* <label>Department</label> */}
      {/* <select name="department" value={formData.department} onChange={handleChange} required>
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select> */}

      {/* TODO (Task 02): Add Salary input field here */}
      {/* <label>Annual Salary ($)</label> */}
      {/* <input type="number" name="salary" value={formData.salary} onChange={handleChange} min="0" required /> */}

      <label>Photo URL (optional)</label>
      <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} />

      <button className="btn primary" type="submit">{submitText}</button>
    </form>
  );
}

export default EmployeeForm;
