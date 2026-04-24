import { useEffect, useState } from 'react';
import OrderCard from './OrderCard';

const STATUS_TABS = ['All', 'Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'];

function OrderList({ refresh }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    fetchOrders();
  }, [refresh, activeTab]);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const url = activeTab !== 'All'
        ? `${import.meta.env.VITE_API_URL}/api/orders?status=${activeTab}`
        : `${import.meta.env.VITE_API_URL}/api/orders`;
      const res = await fetch(url);
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error('Error fetching orders:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/orders/${id}`, { method: 'DELETE' });
    setOrders((prev) => prev.filter((o) => o._id !== id));
  };

  const handleStatusChange = async (id, newStatus) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/orders/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });
    const updated = await res.json();
    if (res.ok) {
      setOrders((prev) => prev.map((o) => (o._id === id ? updated : o)));
    }
  };

  // reduce() — accumulate total revenue from non-cancelled orders
  // starts at 0 (the second argument), adds each order's totalPrice
  const totalRevenue = orders
    .filter((o) => o.status !== 'Cancelled')
    .reduce((sum, o) => sum + o.totalPrice, 0);

  if (loading) return <p style={{ textAlign: 'center', color: '#888' }}>Loading orders...</p>;

  return (
    <div className="order-list">
      <h2>📋 Order History</h2>

      {/* Revenue summary */}
      <div className="summary-box">
        <strong>{orders.length}</strong> orders &nbsp;|&nbsp;
        Total Revenue: <strong>Rs. {totalRevenue.toLocaleString()}</strong>
        {' '}(excludes cancelled)
      </div>

      {/* Status tab buttons */}
      <div className="tab-bar">
        {STATUS_TABS.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {orders.length === 0 ? (
        <div className="empty-msg"><p>No orders found.</p></div>
      ) : (
        orders.map((order) => (
          <OrderCard
            key={order._id}
            order={order}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
          />
        ))
      )}
    </div>
  );
}

export default OrderList;
