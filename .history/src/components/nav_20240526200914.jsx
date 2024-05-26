import { button } from "./button";

export default function navComponent() {
  return (
    <div>
      <div class="flex gap-5 justify-evenly items-center m-auto mt-16 overflow-hidden w-max bg-gray-500 rounded-full">
        {button("All Movies", () => router.navigate("/"), true)}
        {button("Favourites", () => router.navigate("/favourites"), false)}
      </div>
    </div>
  );
}
