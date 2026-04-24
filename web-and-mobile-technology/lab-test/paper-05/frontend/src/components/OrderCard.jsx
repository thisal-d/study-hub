// Status options that can be progressed to (not Cancelled shown in dropdown)
const NEXT_STATUSES = ['Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'];

function OrderCard({ order, onDelete, onStatusChange }) {
  // Format date/time: toLocaleString() gives "4/24/2026, 10:30:00 AM"
  const formattedDate = new Date(order.orderedAt).toLocaleString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });

  // Format price with commas: 45000 → "45,000"
  const formattedPrice = Number(order.totalPrice).toLocaleString();

  return (
    <div className={`order-card ${order.status}`}>
      <div className="order-info">
        <h3>👤 {order.customerName}</h3>
        <p><strong>Product:</strong> {order.product} &times; {order.quantity}</p>
        <p><strong>Total:</strong> Rs. {formattedPrice}</p>
        <p><strong>Payment:</strong> {order.paymentMethod}</p>
        <span className={`status-badge badge-${order.status}`}>{order.status}</span>
        <p className="date">Ordered: {formattedDate}</p>
      </div>

      <div className="card-actions">
        {/* Only show status selector if order is not yet delivered or cancelled */}
        {order.status !== 'Delivered' && order.status !== 'Cancelled' && (
          <select
            className="status-select"
            value={order.status}
            onChange={(e) => onStatusChange(order._id, e.target.value)}
          >
            {NEXT_STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        )}
        <button className="btn-delete" onClick={() => onDelete(order._id)}>
          🗑 Remove
        </button>
      </div>
    </div>
  );
}

export default OrderCard;
