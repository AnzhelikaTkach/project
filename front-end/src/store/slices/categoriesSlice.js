import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategories = createAsyncThunk(
  "category/getAllCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3333/categories/all");
      return response.data;
    } catch (err) {
      // console.log(err);
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

export const getCategoriesAndProducts = createAsyncThunk(
  "category/getCategoriesAndProducts",
  async (_, { rejectWithValue }) => {
    try {
      const categoriesResponse = await axios.get(
        "http://localhost:3333/categories/all"
      );

      const productsResponse = await axios.get(
        "http://localhost:3333/products/all"
      );

      const productsByCategory = {};

      // productsResponse.data.forEach((product) => {
      //   if (!productsByCategory[product.categoryId]) {
      //     productsByCategory[product.categoryId] = [];
      //   }
      //   productsByCategory[product.categoryId].push(product);
      // });

      return { categories: categoriesResponse.data, productsByCategory };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// export const getAllCategories = (state) => state.category.categories;
// export const getAllProductsByCategory = (state) => state.category.categoryProducts;
// export const getCategoryProductsStatus = (state) => state.category.categoryProductsStatus;
// export default categorySlice.reducer;

const categoriesSlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    categoryProducts: [],
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectCat(state, action) {
      state.selectedCategory = state.categories.find(
        (category) => (category.id = action.payload)
      );
    },
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
        // state.catTitle = action.payload;
      })

      .addCase(getCategoryProducts.rejected, (state, action) => {
        state.categoryProductsStatus = "rejected";
        state.categoryProductsError = action.payload;
      });
    // .addCase(getCategoriesAndProducts.fulfilled, (state, action) => {
    //   state.categories = action.payload.categories;
    //   state.productsByCategory = action.payload.productsByCategory;
    // })
    // .addCase(getCategoriesAndProducts.rejected, (state, action) => {
    //   console.error("Error loading categories and products:", action.error);
    // });
  },
});

export const { setSelectedCategory, setSelectCat } = categoriesSlice.actions;
export default categoriesSlice.reducer;
// export const selectCategories = (state) => state.category.categories;
// export const productsByCategory = (state) => state.categories.categoryProducts;
