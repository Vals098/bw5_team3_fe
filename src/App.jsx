import "./App.css";
import MyFooter from "./components/MyFooter";
import WelcomeNavbar from "./components/WelcomeNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import MenuUser from "./components/MenuUser";

function App() {
  return (
    <div class="d-flex flex-column min-vh-100">
      <header>
        <WelcomeNavbar />
      </header>
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="userDashboard" element={<MenuUser />} />
        </Routes>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
}

export default App;
