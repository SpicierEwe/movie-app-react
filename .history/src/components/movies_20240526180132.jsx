import { useEffect } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, updateMovies } from "../state/slices/moviesSlice";
import { FaStar } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa6";

export default function MoviesComponent() {
  const link =
    "https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg";
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.moviesList);
  let isLoading = useSelector((state) => state.movies.isLoading);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      {!isLoading && (
        <div className="ml-auto  mr-auto mt-12 mb-12 pt-16 grid grid-cols-4 gap-12 max-w-screen-xl ">
          {movies.map((movie, index) => (
            <div
              key={index}
              class="group border-2 border-gray-800 bg-black rounded-xl overflow-hidden hover:-translate-y-1
            transform transition duration-500 ease-in-out  "
            >
              <div className="relative  w-full rounded-xl ">
                <img src={link} alt="movie" class="object-cover" />

                <div class="absolute top-5 right-5 flex items-center flex-col gap-y-5">
                  <div class="flex justify-center align-center">
                    <FaStar
                      size={60}
                      class="relative text-yellow-400 rounded-full p-1"
                    />
                    <h1 className="absolute text-xl font-bold  self-center z-20">
                      {movie.rating.toFixed(1)}
                    </h1>
                  </div>

                  <div class=" bg-white  rounded-full p-2 cursor-pointer">
                    <FaRegHeart size={25} class="text-red"></FaRegHeart>
                  </div>
                </div>

                <p className=" text-md text-white  p-5 px-2 pl-0">
                  {movie.movie}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
