// features/product/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchProductQuery } from './apiSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error, isLoading } = useFetchProductQuery(id);

  if (isLoading) return <div>Loading product...</div>;
  if (error) return <div>Error loading product: {error.message}</div>;
  if (!product) return <div>No product selected.</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.images[0]} alt={product.title} style={{ width: '200px' }} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <div>
        <h3>Category: {product.category.name}</h3>
        <img src={product.category.image} alt={product.category.name} style={{ width: '100px' }} />
      </div>
    </div>
  );
};

export default ProductDetails;
