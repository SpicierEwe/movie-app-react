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
      {!isLoading && (
        <div className="m-auto mt-12 grid grid-cols-3 gap-12 max-w-screen-xl">
          {movies.map((movie, index) => (
            <div key={movie.id} className="w-full ml-12 mr-12">
              <div className="h-60 bg-red-50">
                {/* <img src={movie.image} alt={movie.movie + "_image"}></img> */}
                <div>{movie.rating}</div>
              </div>

              <h3>{movie.movie}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
