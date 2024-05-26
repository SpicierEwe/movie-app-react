import logo from "./logo.svg";
import "./App.css";
import MoviesComponent from "./components/movies";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MoviesComponent />,
  },
  {
    path: "/favourites",
    element: <MoviesComponent />,
  },
]);

function App() {
  return (
    <div>
      <div class="flex gap-5 justify-center m-9">
        <button>All Movies</button>
        {"|"}
        <h1>Favourites</h1>
      </div>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
