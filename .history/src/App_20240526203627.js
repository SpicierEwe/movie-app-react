import logo from "./logo.svg";
import "./App.css";
import MoviesComponent from "./components/movies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import FavouritesComponent from "./components/favourites";
import NavComponent from "./components/nav";

function App() {
  return (
    <div>
      {/* Disclaimer */}
      <div className="bg-red-500 text-center py-2 z-50 fixed bottom-0 w-full">
        This is a disclaimer. You can replace this with your own content.
      </div>

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
    </div>
  );
}

export default App;
