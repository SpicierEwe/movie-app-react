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
        {button("Movies", () => router.navigate("/"))}
        {"|"}
        {button("Favourites", () => router.navigate("/"))}
      </div>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;

function button(text, onClick, isSelected = false) {
  return (
    <button
      class={`border-2 border-teal-600 px-7 py-2 ${
        isSelected ? "bg-teal-700 text-white" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
