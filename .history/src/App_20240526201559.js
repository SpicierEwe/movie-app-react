import logo from "./logo.svg";
import "./App.css";
import MoviesComponent from "./components/movies";
import {
  BrowserRouter,
  Router,
  RouterProvider,
  createBrowserRouter,
  useLocation,
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
        <NavComponent></NavComponent>
      </RouterProvider>
    </BrowserRouter>
  );
}

export default App;
