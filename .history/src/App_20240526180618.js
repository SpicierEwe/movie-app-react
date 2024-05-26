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
    <div class="bg-black">
      <div class="flex gap-5 justify-center p-9 bg-[#1f2020]">
        {button("Movies", () => router.navigate("/"))}
        {"_"}
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
      class={`border-2 border-[#0077b6] px-7 py-2 text-white  ${
        isSelected ? "bg-[#0077b6] font-semibold" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
