import { useEffect } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, updateMovies } from "../state/slices/moviesSlice";

export default function MoviesComponent() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.moviesList);
  let isLoading = useSelector((state) => state.movies.isLoading);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      {!isLoading &&
        movies.map((movie, index) => (
          <div key={movie.id}>
            <img src={movie.image}></img>
            <h1>{movie.id}</h1>
            <h1>{movie.}</h1>
            <h1>{movie.id}</h1>
          </div>
        ))}
    </div>
  );
}
