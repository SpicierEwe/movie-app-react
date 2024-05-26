import logo from "./logo.svg";
import "./App.css";
import MoviesComponent from "./components/movies";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import FavouritesComponent from "./components/favourites";

function App() {
  return (
    <Router>
      <div>
        <div className="flex gap-5 justify-evenly items-center m-auto mt-16 overflow-hidden w-max bg-gray-500 rounded-full">
          <NavLink
            to="/"
            className="px-7 py-2 text-white"
            activeClassName="bg-pink-600 font-semibold"
            exact
          >
            All Movies
          </NavLink>
          <NavLink
            to="/favourites"
            className="px-7 py-2 text-white"
            activeClassName="bg-pink-600 font-semibold"
          >
            Favourites
          </NavLink>
        </div>

        <Route path="/" exact component={MoviesComponent} />
        <Route path="/favourites" component={FavouritesComponent} />
      </div>
    </Router>
  );
}

export default App;
