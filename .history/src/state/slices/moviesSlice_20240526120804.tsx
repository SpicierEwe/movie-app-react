import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface MoviesState {
  moviesList: any[];
  loading: boolean;
  error: string | null;
  favourites: any[];
}

const initialState: MoviesState = {
  moviesList: [],
  favourites: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMoviesStart(state) {
      async function fetchM() {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        state.moviesList = data;
        state.loading = false;
      }
      state.loading = true;
    },
  },
});

export const { fetchMoviesStart } = moviesSlice.actions;

export default moviesSlice.reducer;
