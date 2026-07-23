import "./App.css";
import MyFooter from "./components/MyFooter";
import WelcomeNavbar from "./components/WelcomeNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomePage from "./pages/WelcomePage";
import MenuUser from "./components/MenuUser";

function App() {
  return (
    <div class="d-flex flex-column min-vh-100">
      <header>
        <WelcomeNavbar />
      </header>
      <main className="flex-grow-1">
        <MenuUser />
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
}

export default App;
