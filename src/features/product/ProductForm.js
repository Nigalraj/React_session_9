// features/product/ProductForm.js
import React, { useState } from 'react';
import { useCreateProductMutation, useFetchAllProductsQuery } from './apiSlice';

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState('');
  const [categoryId, setCategoryId] = useState(1);
  const [categoryName, setCategoryName] = useState('');
  
  const [createProduct] = useCreateProductMutation();
  const { refetch } = useFetchAllProductsQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct({
        title,
        price: parseFloat(price),
        description,
        images: [images],
        categoryId,
        category: { name: categoryName },
      });
      refetch(); // Refresh the product list
      setTitle('');
      setPrice('');
      setDescription('');
      setImages('');
      setCategoryName('');
    } catch (error) {
      console.error('Failed to create product:', error);
    }
  };

  return (
    <div>
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={images} onChange={(e) => setImages(e.target.value)} required />
        </div>
        <div>
          <label>Category ID:</label>
          <input type="number" value={categoryId} onChange={(e) => setCategoryId(Number(e.target.value))} required />
        </div>
        <div>
          <label>Category Name:</label>
          <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} required />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
