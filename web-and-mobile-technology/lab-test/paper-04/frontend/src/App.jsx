import { useState } from 'react';
import './App.css';
import PatientForm from './components/PatientForm';
import PatientDashboard from './components/PatientDashboard';

function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div className="app">
      <div className="app-header">
        <h1>🏥 Patient Records Manager</h1>
        <p>Hospital patient admission and status tracking system</p>
      </div>
      <PatientForm onPatientAdded={() => setRefresh((r) => r + 1)} />
      <PatientDashboard refresh={refresh} />
    </div>
  );
}

export default App;
