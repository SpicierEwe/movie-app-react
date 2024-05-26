import { Router } from "react-router-dom";

export default function navComponent(props) {
  const router = Router();
  return (
    <div>
      <div class="flex gap-5 justify-evenly items-center m-auto mt-16 overflow-hidden w-max bg-gray-500 rounded-full">
        {button("All Movies", () => router.navigate("/"), true)}
        {button("Favourites", () => router.navigate("/favourites"), false)}
      </div>
      {props.children}
    </div>
  );
}

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
