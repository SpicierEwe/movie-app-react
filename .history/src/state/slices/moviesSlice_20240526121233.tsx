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

// Define the async thunk
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await fetch(
    process.env.REACT_APP_API_URL || "https://dummyapi.online/api/movies"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data = await response.json();
  return data;
});
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMoviesStart(state) {
      async function fetchM() {
        const response = await fetch("https://dummyapi.online/api/movies");
        const data = await response.json();
        state.moviesList = data;
        state.loading = false;
      }
      state.loading = true;
      fetchM();
    },
  },
});

export const { fetchMoviesStart } = moviesSlice.actions;

export default moviesSlice.reducer;
