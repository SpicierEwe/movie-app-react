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
export const fM = createAsyncThunk("movies/fetchMovies", async () => {
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
    fetchMovies(state) {},
  },
});

export const { fetchMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
