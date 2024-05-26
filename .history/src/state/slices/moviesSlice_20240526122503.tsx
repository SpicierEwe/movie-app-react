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
    updateMovies(state, action) {
      state.moviesList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.moviesList = action.payload.sort((a, b) => b.rating - a.rating);
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies";
      });
  },
});

export const { updateMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
