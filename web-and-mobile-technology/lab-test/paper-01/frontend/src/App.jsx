import { useState } from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  // refresh is a counter — incrementing it tells ProductList to re-fetch data
  const [refresh, setRefresh] = useState(0);

  return (
    <div className="app">
      <div className="app-header">
        <h1>📦 Product Inventory Manager</h1>
        <p>Track your products with price and category</p>
      </div>

      {/* When a product is added, increment refresh to trigger re-fetch */}
      <ProductForm onProductAdded={() => setRefresh((r) => r + 1)} />

      {/* ProductList re-fetches every time refresh changes */}
      <ProductList refresh={refresh} />
    </div>
  );
}

export default App;
