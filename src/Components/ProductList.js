import React from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";

const ProductList = ({ products }) => {
  const { url } = useRouteMatch();

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`${url}/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
