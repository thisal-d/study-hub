import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddEmployeePage from "./pages/AddEmployeePage.jsx";
import EditEmployeePage from "./pages/EditEmployeePage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-employee" element={<AddEmployeePage />} />
          <Route path="/edit-employee/:id" element={<EditEmployeePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
