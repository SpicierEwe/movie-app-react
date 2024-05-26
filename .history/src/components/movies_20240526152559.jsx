import { useEffect } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, updateMovies } from "../state/slices/moviesSlice";

export default function MoviesComponent() {
  const link =
    "https://images.unsplash.com/photo-1573987116136-8161883a27f1?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.moviesList);
  let isLoading = useSelector((state) => state.movies.isLoading);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      {!isLoading && (
        <div className="ml-auto  mr-auto mt-12 mb-12 grid grid-cols-4 gap-12 max-w-screen-xl">
          {movies.map((movie, index) => (
            <div key={movie.id} className="w-full relative">
              <div className="overflow-hidden aspect-square  bg-red-50">
                <img src={link} alt={movie.movie + "_image"}></img>
                <div className="absolute z-10">
                  <div>{movie.rating}</div>
                  <h3>{movie.movie}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
