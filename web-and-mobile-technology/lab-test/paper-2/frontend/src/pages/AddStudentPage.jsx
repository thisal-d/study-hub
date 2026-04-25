import { useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm.jsx";
import { createStudent } from "../api/studentApi.js";

function AddStudentPage() {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    try {
      await createStudent(formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to create student", error);
      alert("Failed to create student");
    }
  };

  return <StudentForm submitText="Add Student" onSubmit={handleCreate} />;
}

export default AddStudentPage;
