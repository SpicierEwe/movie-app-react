import { useEffect } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { updateMovies, fM } from "../state/slices/moviesSlice";

export default function MoviesComponent() {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.moviesList);

  useEffect(() => {
    const x = fM();
    dispatch(updateMovies(x));
  }, []);

  return (
    <div>
      <h1>{movies.toString()}</h1>
    </div>
  );
}
