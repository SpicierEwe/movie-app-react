import "./App.css";
import MoviesComponent from "./components/movies";
import FavouritesComponent from "./components/favourites";
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
  Navigate, // Import Navigate for error handling
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MoviesComponent />,
  },
  {
    path: "/favourites",
    element: <FavouritesComponent />,
  },
  // Add a route for any unmatched paths to redirect to the Home route
  {
    path: "*",
    element: <Navigate to="/" replace />, // Redirect with replace to prevent history accumulation
  },
]);

function App() {
  const location = useLocation();

  const isHomeRoute = location.pathname === "/";
  const isFavouritesRoute = location.pathname === "/favourites";

  return (
    <div>
      <div className="flex gap-5 justify-evenly items-center m-auto mt-16 overflow-hidden w-max bg-gray-500 rounded-full">
        {button("All Movies", () => router.navigate("/"), isHomeRoute)}
        {button(
          "Favourites",
          () => router.navigate("/favourites"),
          isFavouritesRoute
        )}
      </div>

      <RouterProvider router={router} />
    </div>
  );
}

function button(text, onClick, isSelected = false) {
  return (
    <button
      className={`px-7 py-2 text-white ${
        isSelected ? "bg-pink-600 font-semibold" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default App;
