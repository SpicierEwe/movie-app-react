import logo from "./logo.svg";
import "./App.css";
import MoviesComponent from "./components/movies";
import {
  BrowserRouter,
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
    <RouterProvider router={router}>
      {/* Render your other components here */}
      <BrowserRouter
      <NavComponent></NavComponent>
    </RouterProvider>
  );
}

export default App;
