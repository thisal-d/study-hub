import { useState } from 'react';
import './App.css';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';

function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div className="app">
      <div className="app-header">
        <h1>🛒 Order Tracker</h1>
        <p>Place and track customer orders end-to-end</p>
      </div>
      <OrderForm onOrderPlaced={() => setRefresh((r) => r + 1)} />
      <OrderList refresh={refresh} />
    </div>
  );
}

export default App;
