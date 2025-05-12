import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'; 
import Navbar from "./components/Navbar";
import VehicleList from "./components/VehicleList";
import AddVehicleForm from "./components/AddVehicleForm";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<VehicleList />} />
          <Route path="/add" element={<AddVehicleForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
