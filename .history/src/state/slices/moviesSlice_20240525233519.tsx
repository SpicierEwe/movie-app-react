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
      const apiUrl = process.env.REACT_APP_MOVIES_API_URL;
      state.loading = true;
      fetch(apiUrl ?? "").then((res) => {
        res.json().then((data) => {
          state.moviesList = data;
          state.loading = false;
        });
      });
    },
  },
});

export const { fetchMoviesStart } = moviesSlice.actions;

export default moviesSlice.reducer;
