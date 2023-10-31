import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategories = createAsyncThunk(
  "category/getAllCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3333/categories/all");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getCategoryProducts = createAsyncThunk(
  "category/getCategoryProducts",
  async (categoryKey, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:3333/categories/${categoryKey}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const categoriesSlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    categoryProducts: [],
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCategories.fulfilled, (state, { payload }) => {
        state.status = "fulfilled";
        state.categories = payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })

      .addCase(getCategoryProducts.pending, (state) => {
        state.categoryProductsStatus = "loading";
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        state.categoryProductsStatus = "fulfilled";
        state.categoryProducts = action.payload;
      })

      .addCase(getCategoryProducts.rejected, (state, action) => {
        state.categoryProductsStatus = "rejected";
        state.categoryProductsError = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
