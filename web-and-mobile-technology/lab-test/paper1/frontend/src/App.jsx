import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/books';

function App() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    // TODO (Student): Add 'genre' (default: 'Fiction') and 'isRead' (default: false) here
  });

  const fetchBooks = async () => {
    try {
      const res = await axios.get(API_URL);
      setBooks(res.data);
    } catch (err) {
      console.error('Error fetching books:', err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData);
      fetchBooks();
      setFormData({
        title: '',
        author: '',
        // TODO (Student): Reset 'genre' and 'isRead' here too
      });
    } catch (err) {
      console.error('Error creating book:', err);
    }
  };

  const handleDelete = async (id) => {
    // TODO (Student): Implement delete functionality
    // Hint: Use axios.delete(`${API_URL}/${id}`)
    // Then call fetchBooks() to refresh the list
    console.log(`Delete book with ID: ${id}`);
  };

  return (
    <div className="container">
      <h1>📚 Book Tracker</h1>

      <div className="form-section">
        <h2>Add New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Author:</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>

          {/* TODO (Student): Add a <select> dropdown for 'genre' with options:
              Fiction, Non-Fiction, Science, History, Other */}

          {/* TODO (Student): Add a checkbox input for 'isRead' labelled "Already Read?" */}

          <button type="submit" className="btn-primary">Add Book</button>
        </form>
      </div>

      <div className="list-section">
        <h2>My Reading List</h2>
        {books.length === 0 ? (
          <p>No books yet. Add some!</p>
        ) : (
          <ul className="item-list">
            {books.map((book) => (
              <li key={book._id} className="item-card">
                <div className="item-details">
                  <h3>{book.title}</h3>
                  <p>Author: {book.author}</p>
                  {/* TODO (Student): Display 'genre' and 'isRead' status here */}
                  {/* Hint: Use a ternary — book.isRead ? '✅ Read' : '📖 Unread' */}
                </div>
                <div className="item-actions">
                  <button
                    className="btn-danger"
                    onClick={() => handleDelete(book._id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
