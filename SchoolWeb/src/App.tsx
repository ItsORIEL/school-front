// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Classes from "./pages/ClassesPage/Classes";
import Create from "./pages/CreatePage/Create";
import Students from "./pages/StudentsPage/Students";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Classes />} />
          <Route path="/Students" element={<Students />} />
          <Route path="/Create" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
