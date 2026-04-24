import { useState } from 'react';
import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div className="app">
      <div className="app-header">
        <h1>📚 Book Library Manager</h1>
        <p>Manage your book collection and track availability</p>
      </div>
      <BookForm onBookAdded={() => setRefresh((r) => r + 1)} />
      <BookList refresh={refresh} />
    </div>
  );
}

export default App;
