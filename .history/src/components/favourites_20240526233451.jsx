import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFovourites } from "../state/slices/moviesSlice";
import { FaStar } from "react-icons/fa";
import { IoMdRemoveCircle } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import MovieModel from "./models/movies_model";

export default function FavouritesComponent() {
  const link =
    "https://i.pinimg.com/564x/6c/51/0d/6c510dee10ff52e9659f5872de36026b.jpg";

  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.moviesList);
  const favouritesIdList = useSelector((state) => state.movies.favouritesIds);

  const [favouritesMoviesList, setFavouritesMoviesList] = useState([]);

  useEffect(() => {
    document.title = "Favourites";
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
              <MovieModel movie={movie} isFavourite={true} key={index} />
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
