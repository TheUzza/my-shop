import React from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';


const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductDetails;
