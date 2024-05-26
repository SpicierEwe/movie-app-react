import { createSlice } from "@reduxjs/toolkit";

interface MoviesState {
  movies: any[];
  loading: boolean;
  error: string | null;
}

const initialState = {};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

export default moviesSlice.reducer;
