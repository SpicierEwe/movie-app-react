import { createSlice } from "@reduxjs/toolkit";

interface MoviesState {
  movies: any[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMoviesStart(state: MoviesState) {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess(state: MoviesState, action) {
      state.movies = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchMoviesFailure(state: MoviesState, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default moviesSlice.reducer;
