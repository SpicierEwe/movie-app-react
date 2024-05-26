import React, { useEffect, useState } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesStart } from "../state/slices/moviesSlice";
import { stringify } from "postcss";

export default function MoviesComponent() {
  const [movies, setMovies] = useState([]);
  function fetchMovies() {
    const apiUrl = process.env.REACT_APP_MOVIES_API_URL;
    fetch(process.env.REACT_APP_MOVIES_API_URL ?? "").then((res) => {
      res.json().then((data) => {
        setMovies(data);
      });
    });
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>{JSON.stringify(movies)}</h1>
    </div>
  );
}
