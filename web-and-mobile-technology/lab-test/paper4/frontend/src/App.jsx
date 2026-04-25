import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';
const STATUSES = ['Todo', 'In Progress', 'Done'];

// =======================================================
// TODO (Student): Move these into separate files:
//   frontend/src/components/TaskCard.jsx
//   frontend/src/components/TaskColumn.jsx
//   frontend/src/components/TaskForm.jsx
// =======================================================

// TaskCard — TODO (Student): Create this component
// Props: task, onDelete, onEdit
// function TaskCard({ task, onDelete, onEdit }) { ... }

// TaskColumn — TODO (Student): Create this component
// Props: title, tasks, onDelete, onEdit
// function TaskColumn({ title, tasks, onDelete, onEdit }) { ... }

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null); // null = not editing
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    // TODO (Student): Add 'status' (default: 'Todo'),
    //                      'dueDate' (default: ''),
    //                      'assignedTo' (default: '')
  });
  const [editData, setEditData] = useState({});

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData);
      fetchTasks();
      setFormData({ title: '', description: '' /* TODO: reset new fields */ });
    } catch (err) {
      console.error('Error creating task:', err);
    }
  };

  const handleDelete = async (id) => {
    // TODO (Student): Implement delete with axios.delete()
    console.log('Delete task:', id);
  };

  const handleEditOpen = (task) => {
    // Open the edit form pre-filled with the task's current values
    setEditingTask(task._id);
    setEditData({
      title: task.title,
      description: task.description,
      // TODO (Student): Also copy status, dueDate, assignedTo
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    // TODO (Student): Call PUT /api/tasks/:editingTask with editData using axios.put()
    // On success: call fetchTasks() and setEditingTask(null)
    console.log('Update task:', editingTask, editData);
  };

  // Group tasks by status
  const tasksByStatus = (status) => tasks.filter((t) => t.status === status);

  return (
    <div className="container">
      <h1>✅ Task Manager</h1>

      {/* ---- Add Task Form ---- */}
      <div className="form-section">
        <h2>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows={2} required />
          </div>
          {/* TODO (Student): Add <input type="date"> for dueDate */}
          {/* TODO (Student): Add <select> for status using STATUSES array */}
          {/* TODO (Student): Add <input type="text"> for assignedTo */}
          <button type="submit" className="btn-primary">Add Task</button>
        </form>
      </div>

      {/* ---- Edit Modal / Inline Form ---- */}
      {editingTask && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>✏️ Edit Task</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="form-group">
                <label>Title:</label>
                <input type="text" name="title" value={editData.title || ''} onChange={handleEditChange} required />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea name="description" value={editData.description || ''} onChange={handleEditChange} rows={2} required />
              </div>
              {/* TODO (Student): Add inputs for dueDate, status, assignedTo (pre-filled) */}
              <div className="modal-actions">
                <button type="submit" className="btn-primary">Save Changes</button>
                <button type="button" className="btn-secondary" onClick={() => setEditingTask(null)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---- Kanban Board ---- */}
      <div className="kanban-board">
        {STATUSES.map((status) => (
          <div key={status} className={`kanban-column column-${status.replace(' ', '-').toLowerCase()}`}>
            <h2 className="column-title">
              {status === 'Todo' && '🔵'} {status === 'In Progress' && '🟡'} {status === 'Done' && '🟢'} {status}
              <span className="task-count">{tasksByStatus(status).length}</span>
            </h2>
            {tasksByStatus(status).length === 0 ? (
              <p className="empty-col">No tasks here.</p>
            ) : (
              tasksByStatus(status).map((task) => (
                // TODO (Student): Replace with <TaskCard task={task} onDelete={handleDelete} onEdit={handleEditOpen} />
                <div key={task._id} className="task-card">
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  {/* TODO (Student): Display assignedTo, dueDate */}
                  <div className="task-actions">
                    <button className="btn-edit" onClick={() => handleEditOpen(task)}>Edit</button>
                    <button className="btn-danger" onClick={() => handleDelete(task._id)}>Delete</button>
                  </div>
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
