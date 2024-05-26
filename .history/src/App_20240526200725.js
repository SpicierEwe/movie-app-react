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
      <div>
        <div class="flex gap-5 justify-evenly items-center m-auto mt-16 overflow-hidden w-max bg-gray-500 rounded-full">
          {button("All Movies", () => router.navigate("/"), true)}
          {button("Favourites", () => router.navigate("/favourites"), false)}
        </div>
      </div>
    </RouterProvider>
  );
}

export default App;

function button(text, onClick, isSelected = false) {
  return (
    <button
      class={`px-7 py-2 text-white  ${
        isSelected ? "bg-pink-600 font-semibold" : ""
      } text-lg`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
