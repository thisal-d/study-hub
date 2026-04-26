import { Link } from "react-router-dom";

function EmployeeCard({ employee, onDelete }) {

  return (
    <div className="card">
      <img
        src={employee.imageUrl || "https://via.placeholder.com/400x220?text=Employee"}
        alt={employee.name}
        className="card-image"
      />
      <h3>{employee.name}</h3>
      <p><strong>Position:</strong> {employee.position}</p>
      <p><strong>Email:</strong> {employee.email}</p>


      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-employee/${employee._id}`}>Edit</Link>
        <button className="btn danger" onClick={() => onDelete(employee._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;
