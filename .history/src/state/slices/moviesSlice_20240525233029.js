import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface MoviesState {
  movies: any[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
};

const apiUrl = process.env.REACT_APP_MOVIES_API_URL;

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMoviesStart(state) {
      state.loading = true;
      fetch(apiUrl ?? "").then((res) => {
        res.json().then((data) => {
          state.movies = data;
        });
      });
    },
  },
});

export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } =
  moviesSlice.actions;

export default moviesSlice.reducer;
