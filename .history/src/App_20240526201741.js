import logo from "./logo.svg";
import "./App.css";
import MoviesComponent from "./components/movies";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
    <RouterProvider router={router}>
      <NavComponent />
      {/* Render your other components here */}
    </RouterProvider>
  );
}

export default App;
