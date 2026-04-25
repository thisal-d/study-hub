import { useEffect, useState } from "react";
import { deleteStudent, getStudents } from "../api/studentApi.js";
import StudentCard from "../components/StudentCard.jsx";

function HomePage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    try {
      const { data } = await getStudents();
      setStudents(data);
    } catch (error) {
      console.error("Failed to fetch students", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    try {
      await deleteStudent(id);
      fetchStudents();
    } catch (error) {
      console.error("Failed to delete student", error);
    }
  };

  useEffect(() => { fetchStudents(); }, []);

  return (
    <section>
      <div className="hero">
        <h1>Student Directory</h1>
        <p>View, manage, edit, and remove student records.</p>
      </div>

      {loading ? (
        <p>Loading students...</p>
      ) : students.length === 0 ? (
        <p>No students found. Add a new student from the menu.</p>
      ) : (
        <div className="grid">
          {students.map((student) => (
            <StudentCard key={student._id} student={student} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </section>
  );
}

export default HomePage;
