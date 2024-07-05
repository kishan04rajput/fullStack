import "./App.css";
// import { Navbar } from "./Components/Navbar";
import { UserDashboardPage } from "./Pages/UserDashboardPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { Signup } from "./Pages/SignupPage";
import { AdminDashboardPage } from "./Pages/AdminDashboardPage.js";
import { Navbar } from "./Components/Navbar.js";
import { BookingHistory } from "./Pages/BookingHistory.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Navbar />}>
            <Route path="/" index element={<UserDashboardPage />} />
            <Route
              path="/bookingHistory/:userName"
              index
              element={<BookingHistory />}
            />
            <Route path="/:userName" element={<UserDashboardPage />} />
            <Route path="/admin/:userName" element={<AdminDashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
