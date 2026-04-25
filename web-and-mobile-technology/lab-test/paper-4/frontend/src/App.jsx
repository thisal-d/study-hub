import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddRecipePage from "./pages/AddRecipePage.jsx";
import EditRecipePage from "./pages/EditRecipePage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-recipe" element={<AddRecipePage />} />
          <Route path="/edit-recipe/:id" element={<EditRecipePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
