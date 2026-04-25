import { Link } from "react-router-dom";

function StudentCard({ student, onDelete }) {
  return (
    <div className="card">
      <img
        src={student.imageUrl || "https://via.placeholder.com/400x220?text=Student"}
        alt={student.fullName}
        className="card-image"
      />
      <h3>{student.fullName}</h3>
      <p><strong>Faculty:</strong> {student.faculty}</p>
      <p><strong>Year:</strong> {student.year}</p>
      <p><strong>Email:</strong> {student.email}</p>
      {/* TODO (Task 02): Display GPA here once added */}
      {/* <p><strong>GPA:</strong> {student.gpa?.toFixed(2)} / 4.00</p> */}

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-student/${student._id}`}>Edit</Link>
        <button className="btn danger" onClick={() => onDelete(student._id)}>Delete</button>
      </div>
    </div>
  );
}

export default StudentCard;
