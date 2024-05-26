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
      <div class="flex gap-5 justify-center m-auto p-9 w-max bg-red-500 rounded-ful">
        {button("Movies", () => router.navigate("/"))}
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
      class={`border-2 border-[#0077b6] px-7 py-2 text-white  ${
        isSelected ? "bg-[#0077b6] font-semibold" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
