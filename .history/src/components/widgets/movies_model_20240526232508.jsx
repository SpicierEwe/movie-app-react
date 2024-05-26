import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { updateFovourites } from "../../state/slices/moviesSlice";

export default function Movies_model(props) {
  const dispatch = useDispatch();
  return (
    <div
      key={props.index}
      className="group border-2 border-gray-900 bg-[#202124] rounded-xl overflow-hidden hover:-translate-y-1
  transform transition duration-500 ease-in-out"
    >
      <Link
        to={props.movie.imdb_url}
        target="_blank"
        className="block relative w-full rounded-xl"
      >
        <img src={props.link} alt="movie" className="object-cover" />
      </Link>
      <div className="absolute top-5 right-5 flex items-center flex-col gap-y-5">
        <div className="flex justify-center items-center relative">
          <FaStar size={70} className="relative text-yellow-400 rounded-full" />
          <h1 className="absolute text-xl font-bold self-center z-20 sm:pt-2 pt-1 text-black">
            {props.movie.rating.toFixed(1)}
          </h1>
        </div>
        <div
          className="bg-white rounded-full p-2 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(); // Prevents the click event from propagating to the Link
            console.log("fav clicked id =" + props.movie.id);
            dispatch(updateFovourites(props.movie.id));
          }}
        >
          {checkFavourite(props.movie.id) ? (
            <FaHeart size={23} className="text-red-500" />
          ) : (
            <FaRegHeart size={23} className="text-red-500" />
          )}
        </div>
      </div>
      <p className="text-md text-[#e8eaed] p-5">{movie.movie}</p>
    </div>
  );
}
