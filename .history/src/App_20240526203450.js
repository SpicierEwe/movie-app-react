import logo from "./logo.svg";
import "./App.css";
import MoviesComponent from "./components/movies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import FavouritesComponent from "./components/favourites";
import NavComponent from "./components/nav";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <NavComponent>
          <Routes>
            <Route path="/" element={<MoviesComponent />} />
            <Route path="/favourites" element={<FavouritesComponent />} />
          </Routes>
        </NavComponent>
      </div>
    </Router>
  );
}

export default App;
