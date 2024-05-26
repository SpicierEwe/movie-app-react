import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface MoviesState {
  moviesList: any[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  moviesList: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMoviesStart(state) {
      state.loading = true;
    },
  },
});

export const { fetchMoviesStart } = moviesSlice.actions;

export default moviesSlice.reducer;
