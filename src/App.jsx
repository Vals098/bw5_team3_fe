import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import Login from "./pages/Login";

import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<WelcomePage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/menu/*" element={<UserLayout />} />

        <Route path="/menu-admin/*" element={<AdminLayout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;