import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';
const CATEGORIES = ['Electronics', 'Clothing', 'Food', 'Furniture', 'Other'];

// TODO (Student): Create a separate ProductCard component
// It should accept props: { product, onDelete }
// And render the product details + Delete button
// function ProductCard({ product, onDelete }) { ... }

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    // TODO (Student): Add 'category' (default: 'Electronics'), 'stock' (default: 0), 'inStock' (default: true)
  });

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData);
      fetchProducts();
      setFormData({ name: '', price: '' /* TODO: reset new fields */ });
    } catch (err) {
      console.error('Error creating product:', err);
    }
  };

  const handleDelete = async (id) => {
    // TODO (Student): Implement delete
  };

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      fetchProducts();
      return;
    }

    // TODO (Student): Call GET /api/products/search?q=<query>
    // Use axios.get(`${API_URL}/search?q=${query}`)
    // Update the products state with the results
    console.log('Search for:', query);
  };

  return (
    <div className="container">
      <h1>🛒 Product Inventory</h1>

      <div className="form-section">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Price ($):</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} required />
          </div>

          {/* TODO (Student): Add <select> for 'category' using CATEGORIES array */}
          {/* TODO (Student): Add <input type="number"> for 'stock' */}

          <button type="submit" className="btn-primary">Add Product</button>
        </form>
      </div>

      <div className="list-section">
        <h2>Products</h2>

        {/* TODO (Student): Add a search input here */}
        {/* It should call handleSearch on every keystroke (onChange) */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Search by name or category..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <ul className="item-list">
            {products.map((product) => (
              // TODO (Student): Replace this <li> block with <ProductCard product={product} onDelete={handleDelete} />
              <li key={product._id} className="item-card">
                <div className="item-details">
                  <h3>{product.name}</h3>
                  <p>Price: ${product.price}</p>
                  {/* TODO (Student): Show category, stock count, and in-stock badge */}
                </div>
                <div className="item-actions">
                  <button className="btn-danger" onClick={() => handleDelete(product._id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
