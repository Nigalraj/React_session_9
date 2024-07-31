import React from 'react';
import { Link } from 'react-router-dom';
import { useFetchAllProductsQuery } from './apiSlice';

const ProductList = () => {
  const { data: products, error, isLoading } = useFetchAllProductsQuery();

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products: {error.message}</div>;

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h2>{product.title}</h2>
              <img src={product.images[0]} alt={product.title} style={{ width: '100px' }} />
              <p>Price: ${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
