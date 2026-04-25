import { Link } from "react-router-dom";

function EmployeeCard({ employee, onDelete }) {
  // TODO (Task 02): Format salary appropriately
  // const formattedSalary = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(employee.salary || 0);

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
      
      {/* TODO (Task 02): Display Department and Salary here */}
      {/* <p><strong>Department:</strong> <span className="badge">{employee.department}</span></p> */}
      {/* <p><strong>Salary:</strong> <span className="salary">{formattedSalary}</span></p> */}

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
