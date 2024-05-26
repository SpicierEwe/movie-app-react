import { useEffect } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { updateMovies, fetchMovies } from "../state/slices/moviesSlice";

export default function MoviesComponent() {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.moviesList);

  useEffect(() => {}, [dispatch]);

  return (
    <div>
      <h1>{movies.toString()}</h1>
    </div>
  );
}
