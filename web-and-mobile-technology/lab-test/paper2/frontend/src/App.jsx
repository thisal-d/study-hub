import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/notes';
const SUBJECTS = ['Maths', 'Science', 'History', 'English', 'Programming', 'Other'];
const PRIORITIES = ['Low', 'Medium', 'High'];

function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    // TODO (Student): Add 'subject' (default: 'Maths') and 'priority' (default: 'Medium') here
  });

  const fetchNotes = async () => {
    try {
      const res = await axios.get(API_URL);
      setNotes(res.data);
    } catch (err) {
      console.error('Error fetching notes:', err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData);
      fetchNotes();
      setFormData({ title: '', content: '' /* TODO: reset subject and priority too */ });
    } catch (err) {
      console.error('Error creating note:', err);
    }
  };

  const handleDelete = async (id) => {
    // TODO (Student): Implement delete with axios.delete()
    console.log('Delete note:', id);
  };

  const handlePriorityChange = async (id, newPriority) => {
    // TODO (Student): Call PATCH /api/notes/:id with { priority: newPriority }
    // Use axios.patch() then call fetchNotes()
    console.log('Update priority for note', id, 'to', newPriority);
  };

  const getPriorityColor = (priority) => {
    if (priority === 'High') return 'badge-high';
    if (priority === 'Medium') return 'badge-medium';
    return 'badge-low';
  };

  return (
    <div className="container">
      <h1>📝 Student Notes</h1>

      <div className="form-section">
        <h2>Add New Note</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Content:</label>
            <textarea name="content" value={formData.content} onChange={handleChange} rows={3} required />
          </div>

          {/* TODO (Student): Add <select> for 'subject' with options from SUBJECTS array */}

          {/* TODO (Student): Add <select> for 'priority' with options from PRIORITIES array */}

          <button type="submit" className="btn-primary">Save Note</button>
        </form>
      </div>

      <div className="list-section">
        <h2>My Notes</h2>
        {notes.length === 0 ? (
          <p>No notes yet. Add one!</p>
        ) : (
          <ul className="item-list">
            {notes.map((note) => (
              <li key={note._id} className="item-card">
                <div className="item-details">
                  <h3>{note.title}</h3>
                  <p className="content-preview">{note.content}</p>
                  {/* TODO (Student): Display subject badge */}
                  {/* TODO (Student): Display priority badge using getPriorityColor() */}

                  {/* TODO (Student): Add a small <select> dropdown here to update priority inline */}
                  {/* On change, call handlePriorityChange(note._id, newValue) */}
                </div>
                <div className="item-actions">
                  <button className="btn-danger" onClick={() => handleDelete(note._id)}>Delete</button>
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
