import React from "react";
import { Route, Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import Home from "./Components/Home";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";

const products = [
  { id: 1, name: "T-Shirt", price: 20 },
  { id: 2, name: "Jeans", price: 50 },
  { id: 3, name: "Sneakers", price: 80 },
];

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/products"
        render={(props) => <ProductList {...props} products={products} />}
      />
      <Route
        path="/products/:id"
        render={(props) => <ProductDetails {...props} products={products} />}
      />
    </div>
  );
};

export default App;
