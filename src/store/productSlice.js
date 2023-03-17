import {  createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
        SingleProduct:[],
        SingleProductStatus:STATUSES.IDLE,
    },
    reducers: {
        // setProducts(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
            .addCase(fetchSingleProducts.pending, (state, action) => {
                state.SingleProductStatus = STATUSES.LOADING;
            })
            .addCase(fetchSingleProducts.fulfilled, (state, action) => {
                state.SingleProduct = action.payload;
                state.SingleProductStatus = STATUSES.IDLE;
            })
            .addCase(fetchSingleProducts.rejected, (state, action) => {
                state.SingleProductStatus = STATUSES.ERROR;
            })
    },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks
export const fetchProducts = createAsyncThunk('products/fetch', async (limit) => {
    const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    const data = await res.json();
    return data;
});
export const fetchSingleProducts = createAsyncThunk('products-single/fetch', async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
});


// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     };
// }