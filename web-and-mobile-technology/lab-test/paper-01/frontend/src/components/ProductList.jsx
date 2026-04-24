import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function ProductList({ refresh }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // useEffect runs after render; re-runs every time `refresh` changes
  useEffect(() => {
    fetchProducts();
  }, [refresh]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to fetch products');
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Remove the deleted product from local state — no need to re-fetch
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products/${id}`,
        { method: 'DELETE' }
      );
      if (!response.ok) throw new Error('Failed to delete product');
      // Filter out the deleted product from state
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <p style={{ textAlign: 'center', color: '#888' }}>Loading products...</p>;
  if (error) return <p className="error-msg">❌ {error}</p>;

  return (
    <div className="product-list">
      <h2>📋 All Products ({products.length})</h2>

      {products.length === 0 ? (
        <div className="empty-msg">
          <p>No products yet. Add your first product above! 👆</p>
        </div>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;
