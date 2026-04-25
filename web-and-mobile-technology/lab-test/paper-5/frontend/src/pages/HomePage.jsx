import { useEffect, useState } from "react";
import { deleteEmployee, getEmployees } from "../api/employeeApi.js";
import EmployeeCard from "../components/EmployeeCard.jsx";

function HomePage() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    try {
      const { data } = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error("Failed to fetch employees", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this employee?");
    if (!confirmed) return;

    try {
      await deleteEmployee(id);
      fetchEmployees();
    } catch (error) {
      console.error("Failed to delete employee", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <section>
      <div className="hero">
        <h1>Employee Directory</h1>
        <p>Manage staff details, positions, and company structure.</p>
      </div>

      {loading ? (
        <p>Loading employees...</p>
      ) : employees.length === 0 ? (
        <p>No employees found. Add a new employee from the menu.</p>
      ) : (
        <div className="grid">
          {employees.map((employee) => (
            <EmployeeCard key={employee._id} employee={employee} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </section>
  );
}

export default HomePage;
