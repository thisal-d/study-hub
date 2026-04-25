import { Link } from "react-router-dom";

function ProductCard({ product, onDelete }) {
  // TODO (Task 02): Implement conditional rendering logic for Stock Quantity
  /*
  let stockDisplay = null;
  if (product.stockQuantity > 10) {
    stockDisplay = <span className="stock-normal">In Stock: {product.stockQuantity}</span>;
  } else if (product.stockQuantity > 0 && product.stockQuantity <= 10) {
    stockDisplay = <span className="stock-low">Low Stock: {product.stockQuantity}</span>;
  } else {
    stockDisplay = <span className="stock-out">Out of Stock</span>;
  }
  */

  return (
    <div className="card">
      <img
        src={product.imageUrl || "https://via.placeholder.com/400x200?text=Product"}
        alt={product.name}
        className="card-image"
      />
      <h3>{product.name}</h3>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      
      {/* <p><strong>Status:</strong> {stockDisplay}</p> */}

      <p>{product.description}</p>

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-product/${product._id}`}>Edit</Link>
        <button className="btn danger" onClick={() => onDelete(product._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
