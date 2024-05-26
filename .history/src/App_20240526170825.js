import logo from "./logo.svg";
import "./App.css";
import MoviesComponent from "./components/movies";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter({
  routes: [
    {
      path: "/",
      element: <MoviesComponent />,
    },
  ],
});

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <MoviesComponent />
      </RouterProvider>
    </div>
  );
}

export default App;
