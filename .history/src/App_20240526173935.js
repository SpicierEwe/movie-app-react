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
        <h1>Favourites</h1>
      </div>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;

function button(text, onClick) {
  return (
    <button class="bg-red-700 px-7 py-2" onClick={onClick}>
      {text}
    </button>
  );
}
