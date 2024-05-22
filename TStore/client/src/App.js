import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import UserDashBoard from "./pages/UserDashBoard";
import AdminDashBoard from "./pages/AdminDashBoard";
import CartPage from "./pages/CartPage";
import InventoryPage from "./pages/InventoryPage";
import AddInventoryPage from "./pages/AddInventoryPage";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route
              path="/userDashBoard/:userName"
              element={<UserDashBoard />}
            />
            <Route
              path="/adminDashboard/:userName"
              element={<AdminDashBoard />}
            />
            <Route
              path="/userDashBoard/:userName/cart"
              element={<CartPage />}
            />
            <Route
              path="/adminDashboard/:userName/inventory"
              element={<InventoryPage />}
            />
            <Route
              path="/adminDashboard/:userName/inventory/add"
              element={<AddInventoryPage />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

// testLine
