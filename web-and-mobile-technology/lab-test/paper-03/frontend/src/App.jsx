import { useState } from 'react';
import './App.css';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

function App() {
  const [refresh, setRefresh] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="app">
      <div className="app-header">
        <h1>🎬 Movie Review Manager</h1>
        <p>Track your watchlist and rate what you've seen</p>
      </div>
      <MovieForm onMovieAdded={() => setRefresh((r) => r + 1)} />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <MovieList refresh={refresh} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
