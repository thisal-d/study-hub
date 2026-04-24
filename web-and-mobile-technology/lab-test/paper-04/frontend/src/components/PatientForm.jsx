import { useState } from 'react';

const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const PRIORITIES = ['Low', 'Medium', 'High', 'Critical'];

function PatientForm({ onPatientAdded }) {
  const [formData, setFormData] = useState({
    name: '', age: '', bloodGroup: 'O+', diagnosis: '', priority: 'Medium',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError(''); setSuccess('');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/patients`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to admit patient');
      setSuccess(`✅ Patient "${data.name}" admitted successfully!`);
      onPatientAdded();
      setFormData({ name: '', age: '', bloodGroup: 'O+', diagnosis: '', priority: 'Medium' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="patient-form" onSubmit={handleSubmit}>
      <h2>🏥 Admit New Patient</h2>
      {error && <p className="error-msg">❌ {error}</p>}
      {success && <p className="success-msg">{success}</p>}
      <div className="form-grid">
        <div className="form-group">
          <label>Full Name *</label>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Kasun Perera" required />
        </div>
        <div className="form-group">
          <label>Age *</label>
          <input name="age" type="number" min="0" max="150" value={formData.age} onChange={handleChange} placeholder="e.g. 45" required />
        </div>
        <div className="form-group">
          <label>Blood Group *</label>
          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
            {BLOOD_GROUPS.map((bg) => <option key={bg} value={bg}>{bg}</option>)}
          </select>
        </div>
        <div className="form-group span-2">
          <label>Diagnosis *</label>
          <textarea
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleChange}
            rows={3}
            maxLength={500}
            placeholder="Describe the patient's condition..."
            required
          />
          <span className="char-count">{formData.diagnosis.length}/500</span>
        </div>
        <div className="form-group">
          <label>Priority</label>
          <select name="priority" value={formData.priority} onChange={handleChange}>
            {PRIORITIES.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
      </div>
      <button className="btn-submit" type="submit" disabled={loading}>
        {loading ? 'Admitting...' : 'Admit Patient'}
      </button>
    </form>
  );
}

export default PatientForm;
