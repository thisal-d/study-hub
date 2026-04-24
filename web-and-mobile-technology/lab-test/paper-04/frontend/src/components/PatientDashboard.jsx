import { useEffect, useState } from 'react';
import PatientCard from './PatientCard';

const STATUS_FILTERS = ['All', 'Admitted', 'Under Treatment', 'Recovering', 'Discharged'];

function PatientDashboard({ refresh }) {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    fetchPatients();
  }, [refresh, activeFilter]);

  const fetchPatients = async () => {
    setLoading(true);
    try {
      // Build URL with optional status filter
      const url = activeFilter !== 'All'
        ? `${import.meta.env.VITE_API_URL}/api/patients?status=${encodeURIComponent(activeFilter)}`
        : `${import.meta.env.VITE_API_URL}/api/patients`;
      const res = await fetch(url);
      const data = await res.json();
      setPatients(data);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this patient record permanently?')) return;
    await fetch(`${import.meta.env.VITE_API_URL}/api/patients/${id}`, { method: 'DELETE' });
    setPatients((prev) => prev.filter((p) => p._id !== id));
  };

  const handleDischarge = async (id) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/patients/${id}/discharge`,
      { method: 'PATCH' }
    );
    const data = await res.json();
    if (res.ok) {
      setPatients((prev) => prev.map((p) => (p._id === id ? data.patient : p)));
    } else {
      alert(data.error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/patients/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });
    const updated = await res.json();
    if (res.ok) {
      setPatients((prev) => prev.map((p) => (p._id === id ? updated : p)));
    }
  };

  // Count patients per priority using reduce()
  // reduce() accumulates items into a single object
  const priorityCounts = patients.reduce((acc, p) => {
    acc[p.priority] = (acc[p.priority] || 0) + 1;
    return acc;
  }, {});

  if (loading) return <p style={{ textAlign: 'center', color: '#888' }}>Loading patients...</p>;

  return (
    <div className="dashboard">
      <h2>🏥 Patient Dashboard ({patients.length} patients)</h2>

      {/* Summary chips showing count per priority */}
      <div className="summary-bar">
        {['Critical', 'High', 'Medium', 'Low'].map((p) =>
          priorityCounts[p] ? (
            <span key={p} className="summary-chip">
              {p}: <strong>{priorityCounts[p]}</strong>
            </span>
          ) : null
        )}
      </div>

      {/* Status filter buttons */}
      <div className="filter-bar">
        {STATUS_FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {patients.length === 0 ? (
        <div className="empty-msg"><p>No patients found.</p></div>
      ) : (
        patients.map((p) => (
          <PatientCard
            key={p._id}
            patient={p}
            onDelete={handleDelete}
            onDischarge={handleDischarge}
            onStatusChange={handleStatusChange}
          />
        ))
      )}
    </div>
  );
}

export default PatientDashboard;
