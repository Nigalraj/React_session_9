import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/product/apiSlice';
import productReducer from '../features/product/productSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
