import logo from "./logo.svg";
import "./App.css";
import MoviesComponent from "./components/movies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import FavouritesComponent from "./components/favourites";
import NavComponent from "./components/nav";

function App() {
  return (
    <Router>
      {/* Disclamer */}
      <div className="sticky z-50"> Hiiii </div>
      <NavComponent>
        <Routes>
          <Route path="/" element={<MoviesComponent />} />
          <Route path="/favourites" element={<FavouritesComponent />} />
        </Routes>
      </NavComponent>
    </Router>
  );
}

export default App;
