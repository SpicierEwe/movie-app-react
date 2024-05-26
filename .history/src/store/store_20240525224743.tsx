import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../state/slices/moviesSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
