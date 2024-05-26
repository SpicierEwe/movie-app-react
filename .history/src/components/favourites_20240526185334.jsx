import { useEffect, useState } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFavorites,
  fetchMovies,
  updateFovourites,
  updateMovies,
} from "../state/slices/moviesSlice";
import { FaStar } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

import { FaHeart, FaRegHeart } from "react-icons/fa6";

export default function FavouritesComponent() {
  const link =
    "https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg";
  const dispatch = useDispatch();

  const favouritesMoviesList = useSelector(
    (state) => state.movies.favouritesMoviesList
  );

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <div>
      {
        <div className="ml-auto  mr-auto mt-12 mb-12 pt-16 grid grid-cols-4 gap-12 max-w-screen-xl">
          {fetchFavorites.map((movie, index) => (
            <div
              key={index}
              class="group border-2 border-gray-900 bg-[#202124] rounded-xl overflow-hidden hover:-translate-y-1
            transform transition duration-500 ease-in-out  "
            >
              <div className="relative  w-full rounded-xl ">
                <img src={link} alt="movie" class="object-cover" />

                <div class="absolute top-5 right-5 flex items-center flex-col gap-y-5">
                  <div class="flex justify-center align-center">
                    <FaStar
                      size={70}
                      class="relative text-yellow-400 rounded-full p-1"
                    />
                    <h1 className="absolute text-xl font-bold  self-center z-20 text-black">
                      {movie.rating.toFixed(1)}
                    </h1>
                  </div>

                  <div
                    class=" bg-white  rounded-full p-2 cursor-pointer"
                    onClick={() => {
                      console.log("fav clicked id =" + movie.id);
                      dispatch(updateFovourites(movie.id));
                    }}
                  ></div>
                </div>

                <p className=" text-md text-[#e8eaed] p-5 ">{movie.movie}</p>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}
