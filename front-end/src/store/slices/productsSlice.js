import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3333/products/all");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getSingleProduct = createAsyncThunk(
  "products/getSingleProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:3333/products/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productSingle: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.productSingleStatus = "loading";
      })

      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.productSingleStatus = "fulfilled";
        state.productSingle = action.payload;
      })

      .addCase(getSingleProduct.rejected, (state, action) => {
        state.productSingleStatus = "rejected";
        state.productSingleError = action.payload;
      });
  },
});

export default productsSlice.reducer;
