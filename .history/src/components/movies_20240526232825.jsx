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
import Movies_model from "./widgets/movies_model";

export default function MoviesComponent() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.moviesList);
  let isLoading = useSelector((state) => state.movies.isLoading);

  const favouritesIdList = useSelector((state) => state.movies.favouritesIds);

  let checkFavourite = (id) => {
    return favouritesIdList.includes(id);
  };

  useEffect(() => {
    document.title = "All Movies";
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      {!isLoading && (
        <div className="ml-auto mr-auto mt-12 mb-24 pt-16 grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  px-9 md:px-16 xl:px-0 gap-12 max-w-screen-xl">
          {movies.map((movie, index) => (
            <Movies_model movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
