import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFovourites } from "../state/slices/moviesSlice";
import { FaStar } from "react-icons/fa";
import { IoMdRemoveCircle } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function FavouritesComponent() {
  const link =
    "https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg";
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.moviesList);
  const favouritesIdList = useSelector((state) => state.movies.favouritesIds);

  const [favouritesMoviesList, setFavouritesMoviesList] = useState([]);

  useEffect(() => {
    const x = movies.filter((movie) => favouritesIdList.includes(movie.id));
    setFavouritesMoviesList(x);
  }, [favouritesIdList, movies]);

  if (favouritesMoviesList.length === 0) {
    return (
      <div className="flex justify-center items-center gap-3 mt-12 flex-col">
        <div className="flex gap-3">
          <h1 className="text-2xl text-white">No Favourites Yet</h1>
          <FcLike size={30} className="" />
        </div>
        <p>
          You can add a movie to favourite by click on the heart icon. Find all
          movies here{" "}
          <Link className="underline" to={"/"}>
            All Movies
          </Link>
        </p>
      </div>
    );
  }

  //   if favourite movies are not empty, then display them
  return (
    <div>
      {
        <div className="ml-auto mr-auto mt-12 mb-12 pt-16 grid grid-cols-4 gap-12 max-w-screen-xl">
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
                <div className="absolute bottom-0 left-0 right-0 bg-[#202124] bg-opacity-70 text-white p-5">
                  <p className="text-lg">{movie.movie}</p>
                </div>
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
                ></div>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}
