import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddStudentPage from "./pages/AddStudentPage.jsx";
import EditStudentPage from "./pages/EditStudentPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-student" element={<AddStudentPage />} />
          <Route path="/edit-student/:id" element={<EditStudentPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
