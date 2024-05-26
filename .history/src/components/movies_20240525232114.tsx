import React, { useEffect } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesStart } from "../state/slices/moviesSlice";

export default function MoviesComponent() {
  const apiUrl = process.env.REACT_APP_MOVIES_API_URL;

  const [movies, setMovies] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    dispatch(fetchMoviesStart());
  }, []);

  return (
    <div>
      <h1>{apiUrl}</h1>
    </div>
  );
}
