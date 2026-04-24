import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

function MovieList({ refresh, searchQuery }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Re-fetch when refresh increments OR when searchQuery changes
  useEffect(() => {
    fetchMovies();
  }, [refresh, searchQuery]);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      // Build URL: append ?search=... if there is a query
      // encodeURIComponent() makes the search term URL-safe (handles spaces, special chars)
      const url = searchQuery
        ? `${import.meta.env.VITE_API_URL}/api/movies?search=${encodeURIComponent(searchQuery)}`
        : `${import.meta.env.VITE_API_URL}/api/movies`;

      const res = await fetch(url);
      const data = await res.json();
      setMovies(data);
    } catch (err) {
      console.error('Error fetching movies:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/movies/${id}`, { method: 'DELETE' });
    setMovies((prev) => prev.filter((m) => m._id !== id));
  };

  const handleToggleWatched = async (id) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/movies/${id}/watched`,
      { method: 'PATCH' }
    );
    const updated = await res.json();
    if (res.ok) {
      // Replace the toggled movie in state with the updated version from server
      setMovies((prev) => prev.map((m) => (m._id === id ? updated : m)));
    }
  };

  if (loading) return <p style={{ textAlign: 'center', color: '#888' }}>Loading movies...</p>;

  return (
    <div className="movie-list">
      <h2>🎬 My Movie List ({movies.length} results)</h2>
      {movies.length === 0 ? (
        <div className="empty-msg">
          <p>{searchQuery ? `No movies found for "${searchQuery}"` : 'No movies yet. Add one above!'}</p>
        </div>
      ) : (
        movies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            onDelete={handleDelete}
            onToggleWatched={handleToggleWatched}
          />
        ))
      )}
    </div>
  );
}

export default MovieList;
