import React, { useEffect, useState } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesStart } from "../state/slices/moviesSlice";
import { stringify } from "postcss";

export default function MoviesComponent() {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.moviesList);

  const fetchMovies = async () => {
    dispatch(fetchMoviesStart());
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>{movies}</h1>
    </div>
  );
}
