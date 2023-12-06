import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchProductsApi} from '../../service/apiService';

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    try {
      return await fetchProductsApi();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    quantity: 1,
    status: 'idle',
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        product => product.id !== action.payload,
      );
    },
    incrementAmountItem: state => {
      state.quantity += 1;
    },
    decrementAmountItem: state => {
      if (state.quantity > 1) {
        state.quantity -= 1;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        console.log('Error fetching product', action.error.message);
      });
  },
});

export const {
  addProduct,
  removeProduct,
  incrementAmountItem,
  decrementAmountItem,
} = productSlice.actions;

export default productSlice.reducer;
