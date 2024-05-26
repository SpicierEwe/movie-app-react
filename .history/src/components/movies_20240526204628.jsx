import { useEffect } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  updateFovourites,
  updateMovies,
} from "../state/slices/moviesSlice";
import { FaStar } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function MoviesComponent() {
  const link =
    "https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg";
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.moviesList);
  let isLoading = useSelector((state) => state.movies.isLoading);

  const favouritesIdList = useSelector((state) => state.movies.favouritesIds);

  let checkFavourite = (id) => {
    return favouritesIdList.includes(id);
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      {!isLoading && (
        <div className="ml-auto mr-auto mt-12 mb-15 pt-16 grid grid-cols-4 gap-12 max-w-screen-xl">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="group border-2 border-gray-900 bg-[#202124] rounded-xl overflow-hidden hover:-translate-y-1
            transform transition duration-500 ease-in-out"
            >
              <Link
                to={movie.imdb_url}
                target="_blank"
                className="block relative w-full rounded-xl"
              >
                <img src={link} alt="movie" className="object-cover" />
              </Link>
              <div className="absolute top-5 right-5 flex items-center flex-col gap-y-5">
                <div className="flex justify-center align-center relative">
                  <FaStar
                    size={70}
                    className="relative text-yellow-400 rounded-full p-1"
                  />
                  <h1 className="absolute text-xl font-bold self-center z-20 text-black">
                    {movie.rating.toFixed(1)}
                  </h1>
                </div>
                <div
                  className="bg-white rounded-full p-2 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents the click event from propagating to the Link
                    console.log("fav clicked id =" + movie.id);
                    dispatch(updateFovourites(movie.id));
                  }}
                >
                  {checkFavourite(movie.id) ? (
                    <FaHeart size={23} className="text-red-500" />
                  ) : (
                    <FaRegHeart size={23} className="text-red-500" />
                  )}
                </div>
              </div>
              <p className="text-md text-[#e8eaed] p-5">{movie.movie}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
