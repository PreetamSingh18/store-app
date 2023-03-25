import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "./productSlice";

const initialState = {
  categories: [],
  categoriesStatus: STATUSES.IDLE,
  categoryProducts: [],
  categoryProductsStatus: STATUSES.IDLE,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.categoriesStatus = STATUSES.LOADING;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesStatus = STATUSES.IDLE;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categoriesStatus = STATUSES.ERROR;
      })
      .addCase(fetchCategoryProducts.pending, (state, action) => {
        state.categoryProductsStatus = STATUSES.LOADING;
      })
      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.categoryProducts = action.payload;
        state.categoryProductsStatus = STATUSES.IDLE;
      })
      .addCase(fetchCategoryProducts.rejected, (state, action) => {
        state.categoryProductsStatus = STATUSES.ERROR;
      });
  },
});

export default categorySlice.reducer;

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    const res = await fetch(`https://fakestoreapi.com/products/categories`);
    const data = await res.json();
    return data;
  }
);
export const fetchCategoryProducts = createAsyncThunk(
  "category-products/fetch",
  async (category) => {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await res.json();
    return data;
  }
);
