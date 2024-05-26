import { useNavigate } from "react-router-dom";

export default function NavComponent(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div class="flex gap-5 justify-evenly items-center m-auto mt-16 overflow-hidden w-max bg-gray-500 rounded-full">
        {button("All Movies", () => navigate("/"), true)}
        {button("Favourites", () => navigate("/favourites"), false)}
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
