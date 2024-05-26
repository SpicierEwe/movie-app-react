import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    fetchMoviesStart(state) {
      const apiUrl = process.env.REACT_APP_MOVIES_API_URL;

      state.loading = true;
    },
  },
});

export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } =
  moviesSlice.actions;

export default moviesSlice.reducer;
