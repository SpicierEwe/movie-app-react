import React, { useEffect } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesStart } from "../state/slices/moviesSlice";

export default function MoviesComponent() {
  const apiUrl = process.env.REACT_APP_MOVIES_API_URL;

  useEffect(() => {}, []);
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMoviesStart());
  }, []);

  return (
    <div>
      <h1>{apiUrl}</h1>
    </div>
  );
}
