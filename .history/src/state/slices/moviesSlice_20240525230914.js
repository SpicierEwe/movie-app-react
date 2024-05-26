import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface MoviesState {
  movies: any[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(process.env.REACT_APP_MOVIES_API_URL);
  return response.data;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMoviesStart(state) {
      const res = fetchMoviesStart();
      console.log(res);
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess(state, action) {
      state.movies = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchMoviesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } =
  moviesSlice.actions;

export default moviesSlice.reducer;
