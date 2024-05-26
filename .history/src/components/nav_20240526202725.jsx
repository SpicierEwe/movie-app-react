import { BrowserRouter as Router, useNavigate } from "react-router-dom";

export default function NavComponent(props) {
  const navigate = useNavigate();

  const navigateToAllMovies = () => {
    navigate("/"); // Navigate to the "All Movies" route
  };

  const navigateToFavourites = () => {
    navigate("/favourites"); // Navigate to the "Favourites" route
  };

  return (
    <Router>
      {/* Add the Router component here */}
      <div>
        <div className="flex gap-5 justify-evenly items-center m-auto mt-16 overflow-hidden w-max bg-gray-500 rounded-full">
          {button("All Movies", navigateToAllMovies, props.activeRoute === "/")}
          {button(
            "Favourites",
            navigateToFavourites,
            props.activeRoute === "/favourites"
          )}
        </div>
        {props.children}
      </div>
    </Router>
  );
}

function button(text, onClick, isSelected = false) {
  return (
    <button
      className={`px-7 py-2 text-white ${
        isSelected ? "bg-pink-600 font-semibold" : ""
      } text-lg`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
