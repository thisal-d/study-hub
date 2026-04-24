import { useEffect, useState } from 'react';
import BookCard from './BookCard';

// Filter options for the filter bar
const FILTERS = ['All', 'Available', 'Borrowed'];

function BookList({ refresh }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  // Re-fetch every time `refresh` changes (when a new book is added)
  useEffect(() => {
    fetchBooks();
  }, [refresh]);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/books`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch books');
      setBooks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/books/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete book');
      // Remove from local state — no need to re-fetch
      setBooks((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  const handleToggle = async (id) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/books/${id}/toggle`,
        { method: 'PATCH' }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Toggle failed');
      // Update that specific book in state — no full re-fetch needed
      setBooks((prev) => prev.map((b) => (b._id === id ? data.book : b)));
    } catch (err) {
      alert(err.message);
    }
  };

  // Client-side filtering — no extra API calls needed
  const filteredBooks = books.filter((b) => {
    if (activeFilter === 'Available') return b.available === true;
    if (activeFilter === 'Borrowed') return b.available === false;
    return true; // 'All'
  });

  if (loading) return <p style={{ textAlign: 'center', color: '#888' }}>Loading books...</p>;
  if (error) return <p className="error-msg">❌ {error}</p>;

  return (
    <div className="book-list">
      <h2>📚 Library Collection ({filteredBooks.length} books)</h2>

      {/* Filter buttons */}
      <div className="filter-bar">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f === 'All' && '📚 '}
            {f === 'Available' && '✅ '}
            {f === 'Borrowed' && '❌ '}
            {f}
          </button>
        ))}
      </div>

      {filteredBooks.length === 0 ? (
        <div className="empty-msg">
          <p>No books found. {activeFilter !== 'All' ? 'Try a different filter.' : 'Add your first book!'}</p>
        </div>
      ) : (
        filteredBooks.map((book) => (
          <BookCard
            key={book._id}
            book={book}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))
      )}
    </div>
  );
}

export default BookList;
