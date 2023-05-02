import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const commonSlice = createSlice({
  name: "commonReducer",
  initialState,
  reducers: {
    setAllCategories: (state, action) => {
      state.categories = action.payload.data;
    },
  },
});

export const { setAllCategories } = commonSlice.actions;

export default commonSlice.reducer;
