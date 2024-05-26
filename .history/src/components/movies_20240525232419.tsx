import React, { useEffect, useState } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesStart } from "../state/slices/moviesSlice";

export default function MoviesComponent() {
  const apiUrl = process.env.REACT_APP_MOVIES_API_URL;

  const [movies, setMovies] = useState([]);
  function fetchMovies() {
    fetch(apiUrl).then((res) => {
      res.json().then((data) => {
        setMovies(data);
      });
    });
  }

  useEffect(() => {}, []);

  return (
    <div>
      <h1>{apiUrl}</h1>
    </div>
  );
}
