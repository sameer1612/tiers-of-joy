import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Tile = {
  title: string;
  url: string;
  tier: string | undefined | null;
};
interface TilesState {
  value: Tile[];
}

const initialState: TilesState = {
  value: [],
};

const tilesSlice = createSlice({
  name: "tiles",
  initialState,
  reducers: {
    setTiles: (state, action: PayloadAction<TilesState["value"]>) => {
      state.value = action.payload;
    },
    concatTiles: (state, action: PayloadAction<TilesState["value"]>) => {
      state.value.push(...action.payload);
    },
    addTile: (state, action: PayloadAction<Tile>) => {
      state.value = [...state.value, action.payload];
    },
    removeTile: (state, action: PayloadAction<Tile>) => {
      state.value = state.value.filter((t) => t.url !== action.payload.url);
    },
  },
});

export const { setTiles, concatTiles, addTile, removeTile } =
  tilesSlice.actions;

export default tilesSlice.reducer;
