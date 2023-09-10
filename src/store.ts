import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import tilesReducer from "./slices/tilesSlice";
import tierReducer from "./slices/tierSlice";

export const store = configureStore({
  reducer: {
    tiles: tilesReducer,
    tiers: tierReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
