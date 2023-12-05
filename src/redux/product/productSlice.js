import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    quantity: 1,
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
    incrementAmmountItem: state => {
      state.quantity += 1;
    },
    decrementAmmountItem: state => {
      if (state.quantity > 1) {
        state.quantity -= 1;
      }
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incrementAmmountItem,
  decrementAmmountItem,
  quantity,
} = productSlice.actions;
export default productSlice.reducer;
