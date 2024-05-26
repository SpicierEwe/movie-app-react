import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlinePersonalVideo, MdPerson } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import { FaRegHeart } from "react-icons/fa6";

export default function NavComponent(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const isAllMoviesRoute = location.pathname === "/";
  const isFavouritesRoute = location.pathname === "/favourites";
  const size = 30;

  return (
    <div>
      <div>
        <h1 class="text-4xl text-center font-bold mt-10">Stratex Movie App</h1>
      </div>
      <div class="flex gap-5 justify-evenly items-center m-auto mt-16 overflow-hidden w-fit">
        {button2("", () => {}, isAllMoviesRoute, <FaGithub size={size} />)}
        {button2("", () => {}, isFavouritesRoute, <MdPerson size={size} />)}
      </div>

      {/* ======================= */}
      <div class="flex gap-5 justify-evenly items-center m-auto mt-16 overflow-hidden w-max bg-gray-500 rounded-full">
        {button(
          "All Movies",
          () => navigate("/"),
          isAllMoviesRoute,
          <MdOutlinePersonalVideo />
        )}
        {button(
          "Favourites",
          () => navigate("/favourites"),
          isFavouritesRoute,
          <FaRegHeart />
        )}
      </div>
      {props.children}
    </div>
  );
}

function button(text, onClick, isSelected = false, icon) {
  return (
    <button
      class={`px-7 py-2 text-white flex items-center justify-center ${
        isSelected ? "bg-pink-600 font-semibold" : ""
      } text-lg transition-all duration-100 ease-in-out hover:bg-pink-600 hover:text-white`}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
}

function button2(text, onClick, isSelected = false, icon) {
  return (
    <button
      class={`p-2 rounded-full  flex items-center gap-5 justify-center bg-gray-50 font-semibold
      text-lg text-black hover:bg-pink-600 hover:text-white transition-all duration-300 ease-in-out`}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
}
