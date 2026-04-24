function PatientCard({ patient, onDelete, onDischarge, onStatusChange }) {
  const isActive = patient.status !== 'Discharged';

  // Calculate how many days since admission
  // new Date() - new Date(date) gives milliseconds difference
  // divide by ms-per-day to get days
  const daysSince = Math.floor(
    (new Date() - new Date(patient.admittedDate)) / (1000 * 60 * 60 * 24)
  );

  const statusClass = patient.status.replace(/\s+/g, '-'); // "Under Treatment" → "Under-Treatment"

  return (
    <div className={`patient-card priority-${patient.priority} ${!isActive ? 'discharged' : ''}`}>
      <div className="card-top">
        <h3>👤 {patient.name}</h3>
        <span className={`priority-badge ${patient.priority}`}>{patient.priority}</span>
      </div>

      <div className="card-info">
        <p>
          <strong>Age:</strong> {patient.age} &nbsp;|&nbsp;
          <strong>Blood Group:</strong> {patient.bloodGroup}
        </p>
        <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>
        <p style={{ fontSize: '0.78rem', color: '#999', marginTop: '4px' }}>
          Admitted {daysSince} day{daysSince !== 1 ? 's' : ''} ago
          {patient.dischargedDate && (
            <> &mdash; Discharged: {new Date(patient.dischargedDate).toLocaleDateString('en-GB')}</>
          )}
        </p>
      </div>

      <div className="status-row">
        <span className={`status-badge status-${statusClass}`}>
          {patient.status}
        </span>

        {/* Show status dropdown only for active (non-discharged) patients */}
        {isActive && (
          <select
            className="status-select"
            value={patient.status}
            onChange={(e) => onStatusChange(patient._id, e.target.value)}
          >
            <option value="Admitted">Admitted</option>
            <option value="Under Treatment">Under Treatment</option>
            <option value="Recovering">Recovering</option>
          </select>
        )}
      </div>

      {isActive && (
        <div className="card-actions">
          <button className="btn-discharge" onClick={() => onDischarge(patient._id)}>
            ✅ Discharge
          </button>
          <button className="btn-delete" onClick={() => onDelete(patient._id)}>
            🗑 Delete Record
          </button>
        </div>
      )}

      {!isActive && (
        <div className="card-actions">
          <button className="btn-delete" onClick={() => onDelete(patient._id)}>
            🗑 Delete Record
          </button>
        </div>
      )}
    </div>
  );
}

export default PatientCard;
