import { useState } from 'react';

const GENRES = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance', 'Documentary', 'Thriller', 'Other'];

function MovieForm({ onMovieAdded }) {
  const [formData, setFormData] = useState({
    title: '', director: '', releaseYear: '', rating: '', genre: 'Action',
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
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/movies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to add movie');
      setSuccess(`✅ "${data.title}" added to your list!`);
      onMovieAdded();
      setFormData({ title: '', director: '', releaseYear: '', rating: '', genre: 'Action' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <h2>🎬 Add Movie to Watchlist</h2>
      {error && <p className="error-msg">❌ {error}</p>}
      {success && <p className="success-msg">{success}</p>}
      <div className="form-grid">
        <div className="form-group">
          <label>Title</label>
          <input name="title" value={formData.title} onChange={handleChange} placeholder="e.g. Inception" required />
        </div>
        <div className="form-group">
          <label>Director</label>
          <input name="director" value={formData.director} onChange={handleChange} placeholder="e.g. Christopher Nolan" required />
        </div>
        <div className="form-group">
          <label>Release Year</label>
          <input name="releaseYear" type="number" value={formData.releaseYear} onChange={handleChange} placeholder="e.g. 2010" required />
        </div>
        <div className="form-group">
          <label>Rating (1–10)</label>
          <input name="rating" type="number" min="1" max="10" value={formData.rating} onChange={handleChange} placeholder="e.g. 9" required />
        </div>
        <div className="form-group">
          <label>Genre</label>
          <select name="genre" value={formData.genre} onChange={handleChange}>
            {GENRES.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
      </div>
      <button className="btn-submit" type="submit" disabled={loading}>
        {loading ? 'Adding...' : '➕ Add Movie'}
      </button>
    </form>
  );
}

export default MovieForm;
