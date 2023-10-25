import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TierState {
  value: string[];
}

const initialState: TierState = {
  value: [],
};

const tierSlice = createSlice({
  name: "tiers",
  initialState,
  reducers: {
    setTiers: ( state, action: PayloadAction<TierState["value"]>) => {
      state.value = action.payload;
    },
    addTier: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload];
    },
    removeTier: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((t) => t !== action.payload);
    },
  },
});

export const { setTiers, addTier, removeTier } = tierSlice.actions;

export default tierSlice.reducer;
