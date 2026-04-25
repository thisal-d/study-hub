import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm.jsx";
import { getEmployeeById, updateEmployee } from "../api/employeeApi.js";

function EditEmployeePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const { data } = await getEmployeeById(id);
        setEmployee(data);
      } catch (error) {
        console.error("Failed to fetch employee", error);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleUpdate = async (formData) => {
    try {
      await updateEmployee(id, formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to update employee", error);
      alert("Failed to update employee");
    }
  };

  if (!employee) return <p>Loading employee details...</p>;

  return (
    <EmployeeForm
      initialValues={employee}
      submitText="Update Employee"
      onSubmit={handleUpdate}
    />
  );
}

export default EditEmployeePage;
