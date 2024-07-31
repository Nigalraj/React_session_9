// features/product/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
  endpoints: (builder) => ({
    fetchProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    fetchAllProducts: builder.query({
      query: () => '/products',
    }),
    createProduct: builder.mutation({
      query: (productData) => ({
        url: '/products',
        method: 'POST',
        body: productData,
      }),
    }),
  }),
});

export const { useFetchProductQuery, useFetchAllProductsQuery, useCreateProductMutation } = apiSlice;
