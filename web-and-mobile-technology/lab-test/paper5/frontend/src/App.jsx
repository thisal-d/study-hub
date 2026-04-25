import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/events';
const CATEGORIES = ['Workshop', 'Seminar', 'Sports', 'Cultural', 'Other'];

// =======================================================
// TODO (Student): Move each component to its own file:
//   frontend/src/components/EventForm.jsx
//   frontend/src/components/EventCard.jsx
//   frontend/src/components/CategoryFilter.jsx
// =======================================================

// CategoryFilter — TODO (Student): Create this component
// Props: selected (string), onChange (function)
// Renders a <select> with "All" + all CATEGORIES
// function CategoryFilter({ selected, onChange }) { ... }

// EventCard — TODO (Student): Create this component
// Props: event (object), onDelete (function), onRegister (function)
// Renders: eventName, venue, category, date, capacity bar, register + delete buttons
// function EventCard({ event, onDelete, onRegister }) { ... }

// EventForm — TODO (Student): Create this component
// Props: onEventAdded (function called after successful submit)
// Renders the add-event form
// function EventForm({ onEventAdded }) { ... }

function App() {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    eventName: '',
    venue: '',
    // TODO (Student): Add 'category' (default: 'Workshop'),
    //                      'date' (default: ''),
    //                      'capacity' (default: 1)
  });

  const fetchEvents = async (category = '') => {
    try {
      // TODO (Student): Build the URL based on whether category is set
      // If category is set: `${API_URL}?category=${category}`
      // If not: API_URL
      const url = category ? `${API_URL}?category=${category}` : API_URL;
      const res = await axios.get(url);
      setEvents(res.data);
    } catch (err) {
      console.error('Error fetching events:', err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleCategoryChange = (e) => {
    const cat = e.target.value;
    setSelectedCategory(cat);
    // TODO (Student): Call fetchEvents(cat) here to filter
    fetchEvents(cat);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO (Student): POST formData to API_URL
    // On success: call fetchEvents() and reset formData
    console.log('Submit:', formData);
  };

  const handleDelete = async (id) => {
    // TODO (Student): DELETE request to `${API_URL}/${id}`
    // On success: call fetchEvents(selectedCategory)
    console.log('Delete event:', id);
  };

  const handleRegister = async (id) => {
    try {
      // TODO (Student): PATCH request to `${API_URL}/${id}/register`
      // If response status is 400, show alert with response message
      // On success: call fetchEvents(selectedCategory)
      await axios.patch(`${API_URL}/${id}/register`);
      fetchEvents(selectedCategory);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert(err.response.data.message); // Show "Event is full"
      } else {
        console.error('Register error:', err);
      }
    }
  };

  return (
    <div className="container">
      <h1>🎉 Event Registration</h1>

      {/* ---- Add Event Form (TODO: replace with <EventForm onEventAdded={fetchEvents} />) ---- */}
      <div className="form-section">
        <h2>Create New Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Event Name:</label>
            <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Venue:</label>
            <input type="text" name="venue" value={formData.venue} onChange={handleChange} required />
          </div>
          {/* TODO (Student): Add <select> for category */}
          {/* TODO (Student): Add <input type="date"> for date */}
          {/* TODO (Student): Add <input type="number"> for capacity (min 1) */}
          <button type="submit" className="btn-primary">Create Event</button>
        </form>
      </div>

      {/* ---- Category Filter (TODO: replace with <CategoryFilter selected={selectedCategory} onChange={handleCategoryChange} />) ---- */}
      <div className="filter-bar">
        <label>Filter by Category:</label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* ---- Event List ---- */}
      <div className="list-section">
        <h2>Events ({events.length})</h2>
        {events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          <div className="events-grid">
            {events.map((event) => (
              // TODO (Student): Replace with <EventCard event={event} onDelete={handleDelete} onRegister={handleRegister} />
              <div key={event._id} className="event-card">
                <h3>{event.eventName}</h3>
                <p>📍 {event.venue}</p>
                {/* TODO (Student): Display category, date, registeredCount/capacity */}
                {/* TODO (Student): Add a <progress> bar: value={event.registeredCount} max={event.capacity} */}
                {/* TODO (Student): Show "Full" badge if registeredCount >= capacity */}
                <div className="event-actions">
                  <button className="btn-register" onClick={() => handleRegister(event._id)}>
                    Register
                  </button>
                  <button className="btn-danger" onClick={() => handleDelete(event._id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
