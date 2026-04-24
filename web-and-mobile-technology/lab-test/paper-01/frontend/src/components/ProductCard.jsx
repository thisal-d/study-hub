function ProductCard({ product, onDelete }) {
  // Format the date: new Date("ISO string") creates a Date object
  // .toLocaleDateString() converts it to human-readable format e.g. "4/24/2026"
  const formattedDate = new Date(product.createdAt).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  // Format price with commas e.g. 12500 → "12,500"
  const formattedPrice = Number(product.price).toLocaleString();

  return (
    <div className="product-card">
      <div className="product-card-info">
        <span className="category-badge">{product.category}</span>
        <h3>{product.name}</h3>
        <p>
          <strong>Quantity:</strong> {product.quantity} units
        </p>
        <p>
          <strong>Price:</strong> Rs. {formattedPrice}
        </p>
        <p className="date">Added on {formattedDate}</p>
      </div>

      <button
        className="btn-delete"
        onClick={() => onDelete(product._id)}
        title="Delete this product"
      >
        🗑 Delete
      </button>
    </div>
  );
}

export default ProductCard;
