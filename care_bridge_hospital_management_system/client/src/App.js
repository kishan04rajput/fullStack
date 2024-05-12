import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminLoginPage from "./pages/AdminLoginPage.js";
import LandingPage from "./pages/LandingPage.js";
import DoctorPage from "./pages/DoctorPage.js";
import PatientPage from "./pages/PatientPage.js";
import AdminDashBoard from "./pages/AdminDashboard.js";
import ManageDoctors from "./pages/ManageDoctors.js";
import DoctorDetails from "./pages/DoctorDetails.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/adminDashboard" element={<AdminDashBoard />} />
        <Route path="/manageDoctors" element={<ManageDoctors />} />
        <Route path="/doctorDetails/:name" element={<DoctorDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
