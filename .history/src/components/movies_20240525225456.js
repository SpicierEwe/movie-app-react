import React, { useEffect } from "react";
import RootState from "../types/rootState";
import { useDispatch, useSelector } from "react-redux";

export default function MoviesComponent() {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state: Root)State => state.movies);

  useEffect(() => {
    dispatch(fetchMoviesStart());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}
