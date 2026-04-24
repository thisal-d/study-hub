import { useState } from 'react';

// Allowed categories — must match the enum in backend/models/Product.js
const CATEGORIES = ['Electronics', 'Clothing', 'Food', 'Furniture', 'Stationery', 'Other'];

function ProductForm({ onProductAdded }) {
  // Controlled form state — one object holds all field values
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: '',
    category: 'Electronics',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  // Generic change handler — works for all inputs and selects
  // [e.target.name] is a computed property key — it dynamically picks the field to update
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop browser from refreshing the page
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // import.meta.env.VITE_API_URL reads from the .env file
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // send form data as JSON
      });

      const data = await response.json();

      if (!response.ok) {
        // Server returned an error (e.g. validation failed)
        throw new Error(data.error || 'Failed to add product');
      }

      // Success — notify parent to refresh the list
      setSuccess(`✅ "${data.name}" added successfully!`);
      onProductAdded();

      // Reset form fields
      setFormData({ name: '', quantity: '', price: '', category: 'Electronics' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>➕ Add New Product</h2>

      {error && <p className="error-msg">❌ {error}</p>}
      {success && <p className="success-msg">{success}</p>}

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Laptop"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            min="0"
            placeholder="e.g. 50"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price (Rs.)</label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            step="0.01"
            placeholder="e.g. 12500"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button className="btn-submit" type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add Product'}
      </button>
    </form>
  );
}

export default ProductForm;
