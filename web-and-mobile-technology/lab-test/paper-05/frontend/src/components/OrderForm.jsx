import { useState } from 'react';

const PAYMENT_METHODS = ['Cash', 'Card', 'Online Transfer', 'Crypto'];

function OrderForm({ onOrderPlaced }) {
  const [form, setForm] = useState({
    customerName: '', product: '', quantity: '1', totalPrice: '', paymentMethod: 'Cash',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError(''); setSuccess('');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to place order');
      // Show only last 6 characters of MongoDB _id as a short order number
      setSuccess(`✅ Order #${data._id.slice(-6).toUpperCase()} placed successfully!`);
      onOrderPlaced();
      setForm({ customerName: '', product: '', quantity: '1', totalPrice: '', paymentMethod: 'Cash' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h2>🛒 Place New Order</h2>
      {error && <p className="error-msg">❌ {error}</p>}
      {success && <p className="success-msg">{success}</p>}
      <div className="form-grid">
        <div className="form-group">
          <label>Customer Name *</label>
          <input name="customerName" value={form.customerName} onChange={handleChange} placeholder="e.g. Kasun Perera" required />
        </div>
        <div className="form-group">
          <label>Product *</label>
          <input name="product" value={form.product} onChange={handleChange} placeholder="e.g. Laptop" required />
        </div>
        <div className="form-group">
          <label>Quantity *</label>
          <input name="quantity" type="number" min="1" value={form.quantity} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Total Price (Rs.) *</label>
          <input name="totalPrice" type="number" min="0" step="0.01" value={form.totalPrice} onChange={handleChange} placeholder="e.g. 45000" required />
        </div>
        <div className="form-group">
          <label>Payment Method</label>
          <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
            {PAYMENT_METHODS.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
      </div>
      <button className="btn-submit" type="submit" disabled={loading}>
        {loading ? 'Placing...' : '➕ Place Order'}
      </button>
    </form>
  );
}

export default OrderForm;
