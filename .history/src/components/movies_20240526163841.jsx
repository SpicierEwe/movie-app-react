import { useEffect } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, updateMovies } from "../state/slices/moviesSlice";
import { FaStar } from "react-icons/fa";

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
            <div key={index} className="group">
              <div
                className="relative  w-full rounded-xl overflow-hidden hover:-translate-y-1
                   transform transition duration-500 ease-in-out "
              >
                <img src={link} alt="movie" className="object-cover" />

                <FaStar
                  size={155}
                  class=" absolute top-5 right-5 bg-white text-yellow-500 rounded-full p-1"
                ></FaStar>
                <h1 className="text-xl font-bold absolute top-5 right-5 ">
                  {movie.rating}
                </h1>

                <p className=" text-lg text-gray-900 p-5 pl-0">{movie.movie}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
