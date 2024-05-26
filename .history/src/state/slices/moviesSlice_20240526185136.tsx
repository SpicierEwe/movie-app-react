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
  isLoading: boolean;
  error: string | null;
  favouritesIds: any[];
  favouritesMoviesList: any[];
}

const initialState: MoviesState = {
  moviesList: [],
  favouritesIds: [],
  favouritesMoviesList: [],
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    updateMovies(state, action) {
      state.moviesList = action.payload;
    },

    updateFovourites(state, action) {
      if (state.favouritesIds.includes(action.payload)) {
        state.favouritesIds = state.favouritesIds.filter(
          (id) => id !== action.payload
        );
      } else {
        state.favouritesIds.push(action.payload);
      }
    },

    fetchFavorites(state) {
      state.moviesList = state.moviesList.filter((movie) =>
        state.favouritesIds.includes(movie.id)
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.moviesList = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || null;
    });
  },
});

export const { updateMovies, updateFovourites } = moviesSlice.actions;

export default moviesSlice.reducer;
