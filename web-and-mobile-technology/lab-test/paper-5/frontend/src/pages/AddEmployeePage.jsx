import { useNavigate } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm.jsx";
import { createEmployee } from "../api/employeeApi.js";

function AddEmployeePage() {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    try {
      await createEmployee(formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to create employee", error);
      alert("Failed to create employee");
    }
  };

  return <EmployeeForm submitText="Add Employee" onSubmit={handleCreate} />;
}

export default AddEmployeePage;
