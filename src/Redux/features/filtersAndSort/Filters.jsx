import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  sortValue: "",
  searchValue: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterType: (state, action) => {
      state.type = action.payload;
    },
    setSortValue: (state, action) => {
      state.sortValue = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    resetFilters: (state) => {
      state.type = "";
      state.sortValue = "";
      state.searchValue = "";
    },
  },
});

export const { resetFilters, setFilterType, setSearchValue, setSortValue } =
  filtersSlice.actions;
export default filtersSlice;
