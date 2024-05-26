import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFovourites } from "../state/slices/moviesSlice";
import { FaStar } from "react-icons/fa";
import { IoMdRemoveCircle } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function FavouritesComponent() {
  const link = process.env.DUMMY_API_URL;
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.moviesList);
  const favouritesIdList = useSelector((state) => state.movies.favouritesIds);

  const [favouritesMoviesList, setFavouritesMoviesList] = useState([]);

  useEffect(() => {
    // Map over the favouritesIdList and find corresponding movie objects
    const favouriteMovies = favouritesIdList.map((id) =>
      movies.find((movie) => movie.id === id)
    );

    // Filter out any undefined values
    const filteredFavourites = favouriteMovies.filter(
      (movie) => movie !== undefined
    );

    // Set the state with the filtered list
    setFavouritesMoviesList(filteredFavourites);
  }, [favouritesIdList, movies]);

  //   if favourite movies are not empty, then display them
  if (favouritesIdList.length > 0)
    return (
      <div>
        {
          <div className="ml-auto mr-auto mt-12 mb-24 pt-16 grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  px-9 md:px-16 xl:px-0 gap-12 max-w-screen-xl">
            {favouritesMoviesList.map((movie, index) => (
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
                  <div className="flex justify-center items-center relative">
                    <FaStar
                      size={70}
                      className="relative text-yellow-400 rounded-full"
                    />
                    <h1 className="absolute text-xl font-bold self-center z-20 sm:pt-2 pt-1 text-black">
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
                    <IoMdRemoveCircle size={25} className="text-red-500" />
                  </div>
                </div>
                <p className="text-md text-[#e8eaed] p-5">{movie.movie}</p>
              </div>
            ))}
          </div>
        }
      </div>
    );

  return (
    <div className="flex justify-center items-center gap-3 mt-12 flex-col">
      <div className="flex gap-3">
        <h1 className="text-2xl text-white">No Favourites Yet</h1>
        <FcLike size={30} className="" />
      </div>
      <p className="text-center">
        You can add a movie to favourite by click on the heart icon. Find all
        movies here{" "}
        <Link className="underline" to={"/"}>
          All Movies
        </Link>
      </p>
    </div>
  );
}
