import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the async thunk
const fetchMovies = createAsyncThunk("movies/fetchMovies", async function () {
  const response = await fetch(
    process.env.REACT_APP_API_URL || "https://dummyapi.online/api/movies"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data = await response.json();
  return data;
});

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
    updateMovies(state, action) {
      state.moviesList = action.payload;
    },
    fetchMovies(state) {
      state.loading = true;
    },
  },
});

export const { updateMovies, fetchMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
