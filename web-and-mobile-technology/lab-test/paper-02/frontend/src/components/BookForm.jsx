import { useState } from 'react';

const GENRES = ['Fiction', 'Non-Fiction', 'Science', 'History', 'Technology', 'Biography', 'Other'];

function BookForm({ onBookAdded }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    genre: 'Fiction',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to add book');

      setSuccess(`✅ "${data.title}" added to the library!`);
      onBookAdded();
      setFormData({ title: '', author: '', isbn: '', genre: 'Fiction' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2>📖 Add New Book</h2>

      {error && <p className="error-msg">❌ {error}</p>}
      {success && <p className="success-msg">{success}</p>}

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="title">Book Title</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="e.g. Clean Code"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            type="text"
            placeholder="e.g. Robert C. Martin"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="isbn">ISBN</label>
          <input
            id="isbn"
            name="isbn"
            type="text"
            placeholder="e.g. 978-0132350884"
            value={formData.isbn}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          >
            {GENRES.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
      </div>

      <button className="btn-submit" type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add Book'}
      </button>
    </form>
  );
}

export default BookForm;
