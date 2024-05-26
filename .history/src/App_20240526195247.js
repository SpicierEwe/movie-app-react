import logo from "./logo.svg";
import "./App.css";
import MoviesComponent from "./components/movies";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
    <div>
      <div class="flex gap-5 justify-center m-auto mt-16 overflow-hidden w-max bg-gray-500 rounded-full">
        {button("Movies", () => router.navigate("/"), true)}
        {"_"}
        {button("Favourites", () => router.navigate("/favourites"))}
      </div>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;

function button(text, onClick, isSelected = false) {
  return (
    <button
      class={`px-7 py-2 text-white  ${
        isSelected ? "bg-pink-600 font-semibold" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
