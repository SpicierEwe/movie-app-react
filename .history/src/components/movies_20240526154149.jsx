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
            <div key={index}>
              <div className="relative">
                <img src={link} alt="movie" className="object-cover" />

                <h1 className="text-xl font-bold absolute top-5 right-5 rounded-full p-1 bg-white">
                  {movie.rating}
                </h1>

                <div className="bg-slate-500 opacity-5 absolute bottom-0 w-full p-5">
                  <p className=" text-2xl text-white">{movie.movie}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
