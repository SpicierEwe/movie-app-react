import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the async thunk
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async function () {
    const response = await fetch(
      process.env.REACT_APP_API_URL || "https://dummyapi.online/api/movies"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();
    return data;
  }
);

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
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.moviesList = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export const { updateMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
