import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentForm from "../components/StudentForm.jsx";
import { getStudentById, updateStudent } from "../api/studentApi.js";

function EditStudentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await getStudentById(id);
        setStudent(data);
      } catch (error) {
        console.error("Failed to fetch student", error);
      }
    };
    fetch();
  }, [id]);

  const handleUpdate = async (formData) => {
    try {
      await updateStudent(id, formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to update student", error);
      alert("Failed to update student");
    }
  };

  if (!student) return <p>Loading student details...</p>;

  return <StudentForm initialValues={student} submitText="Update Student" onSubmit={handleUpdate} />;
}

export default EditStudentPage;
