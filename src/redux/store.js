import {configureStore} from '@reduxjs/toolkit';
import productReducer from '../redux/product/productSlice';

export default configureStore({
  reducer: {
    product: productReducer,
  },
});
