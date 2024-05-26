import { useEffect } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, updateMovies } from "../state/slices/moviesSlice";
import { FaStar } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

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

                <div class="absolute top-5 right-5 flex items-center flex-col gap-y-5">
                  <div class="flex justify-center align-center">
                    <FaStar
                      size={60}
                      class="relative text-yellow-400 rounded-full p-1"
                    />
                    <h1 className="absolute text-xl font-bold  self-center z-20">
                      {movie.rating.toFixed(1)}
                    </h1>
                  </div>

                  <FcLike size={40} className=""></FcLike>
                </div>

                <p className=" text-md text-gray-900 p-5 pl-0">{movie.movie}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
