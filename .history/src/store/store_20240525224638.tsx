import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../state/slices/moviesSlice";

const store = configureStore({
  reducer: {
    movies: moviesSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
