import { useEffect } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  updateFovourites,
  updateMovies,
} from "../state/slices/moviesSlice";


export default function MoviesComponent() {
  const link =
    "https://i.pinimg.com/564x/6c/51/0d/6c510dee10ff52e9659f5872de36026b.jpg";
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
     
      )}
    </div>
  );
}
