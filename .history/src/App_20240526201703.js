import logo from "./logo.svg";
import "./App.css";
import MoviesComponent from "./components/movies";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import FavouritesComponent from "./components/favourites";
import NavComponent from "./components/nav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MoviesComponent />,
  },
  {
    path: "/favourites",
    element: <FavouritesComponent />,
  },
]);

function App() {
  return (
    <BrowserRouter>
      <RouterProvider router={router}>
        <div>
          <NavComponent />
          <Route path="/" exact element={<MoviesComponent />} />
          <Route path="/favourites" element={<FavouritesComponent />} />
        </div>
      </RouterProvider>
    </BrowserRouter>
  );
}

export default App;
